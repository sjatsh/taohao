import { findSessionToken } from '@/lib/id-token'
import CredentialsProvider from 'next-auth/providers/credentials'

export const taohao = CredentialsProvider({
  id: 'Taohao',
  name: 'Sign in from Taohao with token',
  credentials: {
    token: {
      label: 'token',
      type: 'text',
    },
  },
  async authorize(credentials) {
    if (!credentials?.token) {
      return null
    }
    const userInfo = await findSessionToken(credentials.token)
    if (!userInfo?.user) {
      return null
    }
    return {
      ...userInfo.user,
    }
  },
})
