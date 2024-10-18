import { randomBytes } from '@noble/ciphers/webcrypto'
import { describe, expect, it } from 'vitest'
import { EncryptTransformer } from '../index'

describe('test-serialize', () => {
  const obj = {
    a: 1,
    b: 2,
  }
  it('basic', () => {
    const key = randomBytes(32)
    const getKey = () => key
    const transformer = new EncryptTransformer(getKey)
    const res = transformer.deserialize(transformer.serialize(obj))

    expect(res).toEqual(obj)
  })

  it('constant-key', () => {
    const key = randomBytes(32)
    const transformer = new EncryptTransformer(key)
    const res = transformer.deserialize(transformer.serialize(obj))

    expect(res).toEqual(obj)
  })

  it('no-encryption', () => {
    const transformer = new EncryptTransformer()
    const res = transformer.deserialize(transformer.serialize(obj))

    expect(res).toEqual(obj)
  })
})
