package main

import (
	"context"
	"github.com/gin-gonic/gin"
	config2 "github.com/sjatsh/taohao/config"
	"golang.ngrok.com/ngrok"
	"golang.ngrok.com/ngrok/config"
	"io"
	"net/http"
	"os"
	"os/exec"
	"strings"
)

func main() {
	if err := run(context.Background()); err != nil {
		Log.Fatal(err)
	}
}

func pipeCommands(commands ...*exec.Cmd) ([]byte, error) {
	for i, command := range commands[:len(commands)-1] {
		out, err := command.StdoutPipe()
		if err != nil {
			return nil, err
		}
		command.Start()
		commands[i+1].Stdin = out
	}
	final, err := commands[len(commands)-1].Output()
	if err != nil {
		return nil, err
	}
	return final, nil
}

func run(ctx context.Context) error {
	if err := config2.InitCfg(); err != nil {
		return err
	}

	if err := os.Chdir("web"); err != nil {
		return err
	}
	cmd := exec.Command("pnpm", "run", "dev")
	cmd.Stdout = os.Stdout
	cmd.Stderr = os.Stderr
	if err := cmd.Start(); err != nil {
		return err
	}

	listener, err := ngrok.Listen(ctx,
		config.LabeledTunnel(config.WithLabel("edge", config2.Cfg.Ngrok.Tunnel.Labels.Edge)),
		ngrok.WithAuthtoken(config2.Cfg.Ngrok.Token),
		ngrok.WithLogger(Log),
	)
	if err != nil {
		return err
	}

	r := gin.New()
	r.Use(gin.Recovery())
	r.Use(gin.Logger())
	r.Any("/*path", func(c *gin.Context) {
		path := c.Request.RequestURI
		if strings.HasPrefix(path, "/api/") {
			c.JSON(http.StatusOK, gin.H{"message": "api not found"})
			return
		}
		req, err := http.NewRequest(c.Request.Method, config2.Cfg.Web.Addr+path, c.Request.Body)
		if err != nil {
			c.Status(http.StatusInternalServerError)
			c.Abort()
			return
		}
		resp, err := http.DefaultClient.Do(req)
		if err != nil {
			c.Status(http.StatusInternalServerError)
			c.Abort()
			return
		}
		defer resp.Body.Close()

		for k, v := range resp.Header {
			for _, vv := range v {
				c.Writer.Header().Add(k, vv)
			}
		}
		if _, err := io.Copy(c.Writer, resp.Body); err != nil {
			c.Status(http.StatusInternalServerError)
			c.Abort()
		}
	})
	return http.Serve(listener, r)
}
