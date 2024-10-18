import { LOG_LEVEL } from '@taohao/env/src/server'
import pino from 'pino'

export const logger = pino({
  level: LOG_LEVEL || 'info',
  base: undefined,
})
