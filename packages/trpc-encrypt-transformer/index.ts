import { gcm } from '@noble/ciphers/aes'
import {
  bytesToHex,
  bytesToUtf8,
  hexToBytes,
  utf8ToBytes,
} from '@noble/ciphers/utils'
import { randomBytes } from '@noble/ciphers/webcrypto'
import { sha256 } from '@noble/hashes/sha256'
import type { DataTransformer } from '@trpc/server'
import superjson from 'superjson'

function arrEqual<T>(a: ArrayLike<T>, b: ArrayLike<T>) {
  if (a.length !== b.length) return false
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false
  }
  return true
}

function encrypt(data: Uint8Array, key: Uint8Array) {
  const nonce = randomBytes(24)
  const aes = gcm(key, nonce)
  const padStart = randomBytes(16)
  const padEnd = randomBytes(16)
  const totalLength = padStart.byteLength + data.byteLength + padEnd.byteLength
  const toEncrypt = new Uint8Array(totalLength)
  toEncrypt.set(padStart, 0)
  toEncrypt.set(data, padStart.byteLength)
  toEncrypt.set(padEnd, padStart.byteLength + data.byteLength)
  const encrypted = aes.encrypt(toEncrypt)
  return { encrypted, nonce }
}

function decrypt(data: Uint8Array, key: Uint8Array, nonce: Uint8Array) {
  const aes = gcm(key, nonce)
  const decrypted = aes.decrypt(data)
  return decrypted
}

export function serialize(object: any, key: Uint8Array) {
  const jsonStr = superjson.stringify(object)
  const toEncrypt = utf8ToBytes(jsonStr)
  const { encrypted, nonce } = encrypt(toEncrypt, key)
  const hash = sha256(toEncrypt)
  const result = new Uint8Array(
    hash.byteLength + encrypted.byteLength + nonce.byteLength,
  )
  result.set(hash, 0)
  result.set(encrypted, hash.byteLength)
  result.set(nonce, hash.byteLength + encrypted.byteLength)
  const res = bytesToHex(result)
  return res
}

const CACHE = new Map<string, object>()

export function deserialize(object: string, key: Uint8Array) {
  const dataHash = object.slice(0, 32)

  const decoded = hexToBytes(object)
  const hash = decoded.subarray(0, 32)
  const encrypted = decoded.subarray(32, decoded.byteLength - 24)
  const nonce = decoded.subarray(32 + encrypted.byteLength)
  const decrypted = decrypt(encrypted, key, nonce)
  const result = decrypted.subarray(16, decrypted.byteLength - 16)
  const expectedHash = sha256(result)
  const jsonStr = bytesToUtf8(result)

  if (!arrEqual(hash, expectedHash)) {
    throw new Error('Hash check failed')
  }
  const data = superjson.parse(jsonStr)
  return data
}

export class EncryptTransformer implements DataTransformer {
  getKey?: () => Uint8Array

  constructor(params?: string | Uint8Array | (() => Uint8Array)) {
    if (params === undefined) return
    if (params instanceof Uint8Array) {
      this.getKey = () => params
    } else if (typeof params === 'string') {
      const key = hexToBytes(params)
      this.getKey = () => key
    } else {
      this.getKey = params
    }
  }

  serialize(object: any) {
    if (this.getKey === undefined) return superjson.serialize(object)
    else return serialize(object, this.getKey())
  }
  deserialize(object: any) {
    if (this.getKey === undefined) return superjson.deserialize(object)
    else {
      const res = deserialize(object, this.getKey())
      console.log(res)
      return res
    }
  }
}
