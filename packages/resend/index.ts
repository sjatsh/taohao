import { Resend } from 'resend'

import { RESEND_API_KEY } from '@taohao/env/src/server'

export const resend = new Resend(RESEND_API_KEY)
