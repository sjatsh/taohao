'use server'

import { resend } from '@/lib/resend'
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
    from: 'admin@sjis.me',
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
              width={50}
              src="https://vz7a7a7pnsqvl2ta.public.blob.vercel-storage.com/images/taohao-figGwbbpBDFO3pJvpPb0phQChtjLPG.png"
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

const headerContentSubtitle = {
  color: '#fff',
  fontSize: '17px',
}

const headerImageContainer = {
  padding: '30px 10px',
}

const headerImage = {
  maxWidth: '100%',
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

const footer = {
  width: '680px',
  maxWidth: '100%',
  margin: '32px auto 0 auto',
  padding: '0 30px',
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

const buttonContainer = {
  marginTop: '24px',
  display: 'block',
}

const button = {
  backgroundColor: '#0095ff',
  border: '1px solid #0077cc',
  fontSize: '17px',
  lineHeight: '17px',
  padding: '13px 17px',
  borderRadius: '4px',
  maxWidth: '120px',
  color: '#fff',
}

const footerDivider = {
  ...divider,
  borderColor: '#d6d8db',
}

const footerText = {
  fontSize: '12px',
  lineHeight: '15px',
  color: '#9199a1',
  margin: '0',
}

const footerLink = {
  display: 'inline-block',
  color: '#9199a1',
  textDecoration: 'underline',
  fontSize: '12px',
  marginRight: '10px',
  marginBottom: '0',
  marginTop: '8px',
}

const footerAddress = {
  margin: '4px 0',
  fontSize: '12px',
  lineHeight: '15px',
  color: '#9199a1',
}

const footerHeart = {
  borderRadius: '1px',
  border: '1px solid #d6d9dc',
  padding: '4px 6px 3px 6px',
  fontSize: '11px',
  lineHeight: '11px',
  fontFamily: 'Consolas,monospace',
  color: '#e06c77',
  maxWidth: 'min-content',
  margin: '0 0 32px 0',
}
