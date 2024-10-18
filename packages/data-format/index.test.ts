import { expect, test } from 'vitest'
import { formatDate, formatNumber, visualLen } from './index'

test('formtat number to string with ,', () => {
  expect(formatNumber(10000)).eq('10,000.00')
  expect(formatNumber(10000, 0)).eq('10,000')
  expect(formatNumber(0)).eq('0.00')
  expect(formatNumber(0.1121212)).eq('0.11')
  expect(formatNumber(0.1161212)).eq('0.12')
})

test('formatDate formats date correctly', () => {
  const date = new Date(2023, 11, 1, 8, 0) // December 1, 2023 08:00:00
  expect(formatDate(date)).eq('2023-12-01 08:00')

  const date2 = new Date(2020, 0, 1, 0, 0) // January 1, 2020 00:00:00
  expect(formatDate(date2)).eq('2020-01-01 00:00')

  const date3 = new Date(1999, 9, 10, 12, 30) // October 10, 1999 12:30:00
  expect(formatDate(date3)).eq('1999-10-10 12:30')
})

test('formatDate handles single digit day and month correctly', () => {
  const date = new Date(2023, 0, 1, 8, 0) // January 1, 2023 08:00:00
  expect(formatDate(date)).eq('2023-01-01 08:00')
})

test('formatDate handles single digit hour and minute correctly', () => {
  const date = new Date(2023, 11, 1, 0, 0) // December 1, 2023 00:00:00
  expect(formatDate(date)).eq('2023-12-01 00:00')
})

test('visualLen should handle empty string', () => {
  expect(visualLen('')).eq(0)
})

test('visualLen should handle english string', () => {
  expect(visualLen('abcde')).eq(5)
})

test('visualLen should handle chinese string', () => {
  expect(visualLen('一二三四五')).eq(10)
})

test('visualLen should handle mixed string', () => {
  expect(visualLen('1二3四5')).eq(7)
})
