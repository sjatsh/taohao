package main

import (
	"context"
	"github.com/sirupsen/logrus"
	log2 "golang.ngrok.com/ngrok/log"
	"os"
)

type Logger struct {
	logger *logrus.Logger
}

func NewLogger() *Logger {
	return &Logger{
		logger: &logrus.Logger{
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
	l := logger.logger.WithContext(ctx).WithFields(data)
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
