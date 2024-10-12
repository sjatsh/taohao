'use server'

import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Section,
  Text,
  Row,
} from '@react-email/components'
import * as React from 'react'

import { ADMIN_EMAIL } from '@/env/server'
import { resend } from '@/lib/resend'

interface EmailProps {
  title_text: string
  order_id: string
  num: number
  price: number
  kami: string
  email: string
}

export const OrderEmail = ({
  title_text,
  order_id,
  num,
  price,
  kami,
  email,
}: EmailProps) => {
  return resend.emails.send({
    from: ADMIN_EMAIL,
    to: email,
    subject: '【淘号网】感谢您的购买，请查收您的收据',
    react: orderEmail({
      title_text: '购买' + title_text,
      order_id: order_id,
      num: num,
      price: price,
      kami: kami,
      email: email,
    }),
  })
}

const orderEmail = ({ title_text, order_id, num, price, kami }: EmailProps) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Container style={container}>
          <Section style={logo}>
            <Img
              src="https://vz7a7a7pnsqvl2ta.public.blob.vercel-storage.com/images/taohao-figGwbbpBDFO3pJvpPb0phQChtjLPG.png"
              width={50}
            />
          </Section>

          <Section style={header}>
            <div style={headerContent}>
              <div style={headerContentTitle}>{title_text}</div>
            </div>
          </Section>

          <Section style={content}>
            <Heading as="h2" style={title}>
              订单号: {order_id}
            </Heading>

            <Hr style={divider} />

            <Heading as="h2" style={title}>
              您的卡密信息
            </Heading>
            <Text style={paragraph}>{kami}</Text>

            <Hr style={divider} />

            <Row>
              <Column>
                <Heading style={paragraph}>{title_text}</Heading>
              </Column>
              <Column>
                <Heading style={paragraph}>x{num}</Heading>
              </Column>
            </Row>
            <Hr />
            <Row>
              <Column>
                <Heading
                  style={{
                    fontSize: '15px',
                    lineHeight: '21px',
                    color: '#3c3f44',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    marginRight: '80px',
                  }}
                >
                  总价：￥{num * price}
                </Heading>
              </Column>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

const main = {
  backgroundColor: '#f3f3f5',
  fontFamily: 'HelveticaNeue,Helvetica,Arial,sans-serif',
}

const headerContent = { padding: '20px 30px 15px' }

const headerContentTitle = {
  color: '#fff',
  fontSize: '27px',
  fontWeight: 'bold',
  lineHeight: '27px',
}

const title = {
  margin: '0 0 15px',
  fontWeight: 'bold',
  fontSize: '21px',
  lineHeight: '21px',
  color: '#0c0d0e',
}

const paragraph = {
  fontSize: '15px',
  lineHeight: '21px',
  color: '#3c3f44',
}

const divider = {
  margin: '30px 0',
}

const container = {
  width: '680px',
  maxWidth: '100%',
  margin: '0 auto',
  backgroundColor: '#ffffff',
}

const content = {
  padding: '30px 30px 40px 30px',
}

const logo = {
  display: 'flex',
  background: '#f3f3f5',
  padding: '20px 30px',
}

const header = {
  borderRadius: '5px 5px 0 0',
  display: 'flex',
  flexDireciont: 'column',
  backgroundColor: '#2b2d6e',
}
