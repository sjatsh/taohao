import { NextRequest, NextResponse } from 'next/server'
import { logger } from '@taohao/logger'
import { CRON_SECRET } from '@taohao/env/src/server'

export async function GET(req: NextRequest) {
  logger.info('cron trc20usdt')
  if (req.headers.get('Authorization') !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.next({ status: 401, statusText: 'Unauthorized' })
  }
  return NextResponse.json({ ok: true })
}