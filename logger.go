package main

import (
	"context"
	"github.com/sirupsen/logrus"
	log2 "golang.ngrok.com/ngrok/log"
	"os"
)

var Log = NewLogger()

type Logger struct {
	*logrus.Logger
}

func NewLogger() *Logger {
	return &Logger{
		Logger: &logrus.Logger{
			Out:          os.Stdout,
			Formatter:    new(logrus.TextFormatter),
			Hooks:        make(logrus.LevelHooks),
			Level:        logrus.InfoLevel,
			ExitFunc:     os.Exit,
			ReportCaller: false,
		},
	}
}

func (logger *Logger) Log(ctx context.Context, level log2.LogLevel, msg string, data map[string]interface{}) {
	l := logger.Logger.WithContext(ctx).WithFields(data)
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
