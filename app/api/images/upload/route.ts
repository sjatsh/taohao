import { put } from '@vercel/blob'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const filename = searchParams.get('filename')
  //@ts-ignore
  const blob = await put('images/' + filename, request.body, {
    access: 'public',
  })
  return NextResponse.json(blob)
}
