import { findUserByName } from '@/lib/id-token'
import CredentialsProvider from 'next-auth/providers/credentials'

export const taohao = CredentialsProvider({
  name: 'Credentials',
  credentials: {
    username: { label: "Username", type: "text"},
    password: { label: "Password", type: "password" },
  },
  async authorize(credentials) {
    if (!credentials?.username || !credentials?.password) {
      return null
    }
    const userInfo = await findUserByName(credentials.username, credentials.password)
    if (!userInfo) {
      return null
    }
    // const session = createUserSession(userInfo.id)
    // if (!session) {
    //   return null
    // }
    return {
      ...userInfo,
    }
  },
})
