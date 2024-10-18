import 'server-only'
import type { AuthContext } from '@taohao/server/src/trpc'
import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from 'next'
import NextAuth, { getServerSession, type ISODateString } from 'next-auth'
import { cache } from 'react'
import { authOptions } from './config'

export function auth() {
  return getServerSession<
    typeof authOptions,
    {
      user: AuthContext['user']
      expires: ISODateString
    }
  >(authOptions)
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment -- ignore
const handler = NextAuth(authOptions)

export const rscAuth = cache(auth)

export function gSSPAuth(
  ...args: [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
) {
  return getServerSession<
    typeof authOptions,
    {
      user: AuthContext
    }
  >(...args, authOptions)
}

export function getAPIAuth(req: NextApiRequest, res: NextApiResponse) {
  return getServerSession<
    typeof authOptions,
    {
      user: AuthContext
    }
  >(req, res, authOptions)
}

export { handler as GET, handler as POST }
