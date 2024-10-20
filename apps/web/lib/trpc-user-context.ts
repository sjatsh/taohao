import { z } from 'zod'
import { findSessionToken } from './id-token'

export const findUserByAuthToken = async (token: string | null) => {
  if (token) {
    const uuidToken = z.string().uuid().safeParse(token)
    if (uuidToken.success) {
      const user = await findSessionToken(uuidToken.data)
      return user
    }
    return null
  }
  return null
}
