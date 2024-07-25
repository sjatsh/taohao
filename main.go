package main

import (
	"context"
	"github.com/gin-gonic/gin"
	"golang.ngrok.com/ngrok"
	"golang.ngrok.com/ngrok/config"
	"log"
	"net/http"
)

func main() {
	if err := run(context.Background()); err != nil {
		log.Fatal(err)
	}
}

func run(ctx context.Context) error {
	listener, err := ngrok.Listen(ctx,
		config.LabeledTunnel(config.WithLabel("edge", "edghts_2jku47jNYaNuxlEYrtar0p2SvBH")),
		ngrok.WithAuthtokenFromEnv(),
		ngrok.WithLogger(NewLogger()),
	)
	if err != nil {
		return err
	}

	engine := gin.New()
	engine.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Hello from ngrok-go!",
		})
	})
	engine.GET("/hello", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Hello from ngrok-go!",
		})
	})
	return http.Serve(listener, engine)
}
