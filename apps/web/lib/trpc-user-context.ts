import { z } from 'zod'
import { findSessionToken } from './id-token'

export const findUserByAuthToken = async (token: string | null) => {
  if (token) {
    const uuidToken = z.string().uuid().safeParse(token)
    if (uuidToken.success) {
      return await findSessionToken(uuidToken.data)
    }
  }
  return null
}
