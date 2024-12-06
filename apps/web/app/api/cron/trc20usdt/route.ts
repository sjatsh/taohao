import { NextRequest, NextResponse } from 'next/server'
import { logger } from '@taohao/logger'

export async function GET(req: NextRequest) {
  logger.info({msg: "Cron job is running"})
  if (req.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    logger.warn({error: "Unauthorized"})
    return NextResponse.next({ status: 401, statusText: 'Unauthorized' })
  }
  logger.info({msg: "Cron job is authorized"})
  return NextResponse.json({ ok: true })
}