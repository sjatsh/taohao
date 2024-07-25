package main

import (
	"context"
	"fmt"
	"github.com/sirupsen/logrus"
	"golang.ngrok.com/ngrok"
	"golang.ngrok.com/ngrok/config"
	log2 "golang.ngrok.com/ngrok/log"
	"log"
	"net/http"
	"os"
)

func main() {
	if err := run(context.Background()); err != nil {
		log.Fatal(err)
	}
}

func run(ctx context.Context) error {
	listener, err := ngrok.Listen(ctx,
		config.LabeledTunnel(config.WithLabel("edge", "edghts_2jkmjCOdFzillMPPCGcasBEeNSW")),
		ngrok.WithAuthtokenFromEnv(),
		ngrok.WithLogger(&Logger{
			Logger: &logrus.Logger{
				Out:          os.Stdout,
				Formatter:    new(logrus.TextFormatter),
				Hooks:        make(logrus.LevelHooks),
				Level:        logrus.DebugLevel,
				ExitFunc:     os.Exit,
				ReportCaller: false,
			},
		}),
	)
	if err != nil {
		return err
	}
	return http.Serve(listener, http.HandlerFunc(handler))
}

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Hello from ngrok-go!")
}

type Logger struct {
	*logrus.Logger
}

func (logger *Logger) Log(ctx context.Context, level log2.LogLevel, msg string, data map[string]interface{}) {
	l := logger.WithContext(ctx).WithFields(data)
	switch level {
	case log2.LogLevelTrace:
		l.Trace(msg)
	case log2.LogLevelDebug:
		l.Debug(msg)
	case log2.LogLevelInfo:
		l.Info(msg)
	case log2.LogLevelWarn:
		l.Warn(msg)
	case log2.LogLevelError:
		l.Error(msg)
	default:
	}
}
