package config

import (
	"errors"
	"gopkg.in/yaml.v3"
	"os"
)

var (
	Cfg CfgServer
)

func InitCfg(filePath ...string) error {
	path := "./config/config.yaml"
	if len(filePath) > 0 && filePath[0] != "" {
		path = filePath[0]
	}
	path, err := existPath(path, 0, 3)
	if err != nil {
		return err
	}
	data, err := os.ReadFile(path)
	if err != nil {
		return err
	}
	if err := yaml.Unmarshal(data, &Cfg); err != nil {
		return err
	}
	return nil
}

func existPath(path string, depth, max int) (string, error) {
	if depth > max {
		return "", errors.New("config file not found")
	}
	if _, err := os.Stat(path); err != nil {
		if !os.IsNotExist(err) {
			return path, nil
		}
		return existPath("../"+path, depth+1, max)
	}
	return path, nil
}

type DbMysql struct {
	Addr        string `json:"addr" yaml:"addr"`
	User        string `json:"user" yaml:"user"`
	Password    string `json:"password" yaml:"password"`
	DbName      string `json:"db_name" yaml:"db_name"`
	MaxOpenConn int    `json:"max_open_conn" yaml:"max_open_conn"`
	MaxIdleConn int    `json:"max_idle_conn" yaml:"max_idle_conn"`
}

type CfgServer struct {
	Server struct {
		Cron struct {
			PaidCheckSpec string `json:"paid_check_spec" yaml:"paid_check_spec"`
		} `json:"cron" yaml:"cron"`
	} `json:"server" yaml:"server"`
	Web struct {
		Addr string `json:"addr" yaml:"addr"`
	} `json:"web" yaml:"web"`
	Origins []string `json:"origins" yaml:"origins"`
	Ngrok   struct {
		Token  string `json:"token" yaml:"token"`
		Tunnel struct {
			Labels struct {
				Edge string `json:"edge" yaml:"edge"`
			} `json:"labels" yaml:"labels"`
		} `json:"tunnel" yaml:"tunnel"`
	} `json:"ngrok" yaml:"ngrok"`
	DB struct {
		Mysql DbMysql `json:"mysql" yaml:"mysql"`
	} `json:"db" yaml:"db"`
}
