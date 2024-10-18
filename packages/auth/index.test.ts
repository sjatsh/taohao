import { expect, test } from 'vitest'
import { Auth } from './index'

test('test api use auth', async () => {
  const auth = new Auth({
    secret: 'd1Jqa0ZjcHVtbVRzWTgydVdRSmQ0aWEyNjRqb0FWRVU=',
  })
  const apiUserJwt = await auth.encryptJWT({
    name: 'luke',
    role: 'api',
  })

  // console.log(apiUserJwt)
  const apiUser = await auth.decryptJWT(apiUserJwt)
  // console.log(apiUser)
  expect(apiUser.role).toEqual('api')
})
