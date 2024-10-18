import { POST, GET as nextAuthGet } from './auth'

export { POST }

// https://next-auth.js.org/tutorials/avoid-corporate-link-checking-email-provider#update-nextauthjs-for-head-requests
export const HEAD = () => {
  return new Response('', {
    status: 200
  })
}

async function createHash(message: string) {
  const data = new TextEncoder().encode(message)
  const hash = await crypto.subtle.digest('SHA-256', data)
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
    .toString()
}

export const GET = async (req: Request, ctx: unknown) => {
  return nextAuthGet(req, ctx)
}
