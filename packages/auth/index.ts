import { EncryptJWT, type JWTPayload, base64url, jwtDecrypt } from 'jose'

type Payload<T> = JWTPayload & T

export class Auth<T> {
  private secret: Uint8Array

  constructor(opts: { secret: string }) {
    this.secret = base64url.decode(opts.secret)
  }

  async encryptJWT(payload: Payload<T>): Promise<string> {
    const jwt = await new EncryptJWT(payload)
      .setProtectedHeader({ alg: 'dir', enc: 'A128CBC-HS256' })
      .setIssuedAt()
      .setIssuer('taohao')
      .setExpirationTime('24h')
      .encrypt(this.secret)
    return jwt
  }

  async decryptJWT(jwt: string): Promise<Payload<T>> {
    const { payload } = await jwtDecrypt(jwt, this.secret)
    return payload as unknown as Payload<T>
  }
}
