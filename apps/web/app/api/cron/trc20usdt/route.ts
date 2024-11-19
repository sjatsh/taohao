import { NextRequest, NextResponse } from 'next/server'
import { logger } from '@taohao/logger'
import { CRON_SECRET } from '@taohao/env/src/server'

export async function GET(req: NextRequest) {
  logger.info({msg: "Cron job is running"})
  if (req.headers.get('Authorization') !== `Bearer ${CRON_SECRET}`) {
    logger.warn({error: "Unauthorized"})
    return NextResponse.next({ status: 401, statusText: 'Unauthorized' })
  }
  logger.info({msg: "Cron job is authorized"})
  return NextResponse.json({ ok: true })
}