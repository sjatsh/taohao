import { adapter } from '@/lib/auth-adapter'
import type { CookiesOptions, NextAuthOptions } from 'next-auth'
import { decode, encode } from 'next-auth/jwt'
import { taohao } from './taohao'
import { logger } from '@taohao/logger'

const devCookieSettings = {
  state: {
    name: 'next-auth.state',
    options: {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      secure: false
    }
  },
  callbackUrl: {
    name: 'next-auth.callback-url',
    options: {
      httpOnly: false,
      sameSite: 'lax',
      path: '/',
      secure: false
    }
  }
} satisfies Partial<CookiesOptions>

const productionCookieSettings = {
  state: {
    name: '__Secure-next-auth.state',
    options: {
      httpOnly: true,
      // Apple use form_post, so we need to set sameSite to none
      sameSite: 'none',
      path: '/',
      secure: true
    }
  },
  // https://github.com/nextauthjs/next-auth/issues/5810
  callbackUrl: {
    name: '__Secure-next-auth.callback-url',
    options: {
      httpOnly: false,
      sameSite: 'none',
      path: '/',
      secure: true
    }
  }
} satisfies Partial<CookiesOptions>

export const authOptions: NextAuthOptions = {
  adapter: {
    ...adapter
  },
  providers: [taohao],
  // https://github.com/nextauthjs/next-auth/discussions/6898
  cookies:
    process.env.NODE_ENV === 'production'
      ? productionCookieSettings
      : devCookieSettings,
  callbacks: {
    async signIn({ user }) {
      return !!user
    },
    async redirect({ url, baseUrl }) {
      return baseUrl + '/admin'
    },
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          id: user.id
        }
      }
      return token
    },
    session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id
        }
      }
    }
  },
  session: {
    strategy: 'jwt'
  },
  jwt: {
    async encode(param) {
      return await encode(param)
    },
    async decode(param) {
      return decode(param)
    }
  }
}
