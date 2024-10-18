import { format } from 'date-fns'

export const formatNumber = (val: number, precision = 2): string => {
  if (precision < 0) return `${val}`
  const fixed = val.toFixed(precision)
  const parts = fixed.split('.') as [string, string]
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return parts.join('.')
}

export const formatDate = (
  param?: Date | null | string,
  format: (param: {
    yyyy: string
    mm: string
    dd: string
    hh: string
    min: string
  }) => string = ({ yyyy, mm, dd, hh, min }) =>
    `${yyyy}-${mm}-${dd} ${hh}:${min}`,
) => {
  if (!param) return ''
  const date = new Date(param)
  const yyyy = date.getFullYear()
  const mm =
    date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1 // getMonth() is zero-based
  const dd = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()
  const hh = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()
  const min =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()
  return format({
    yyyy: yyyy.toString(),
    mm: mm.toString(),
    dd: dd.toString(),
    hh: hh.toString(),
    min: min.toString(),
  })
}

export const visualLen = (s: string): number => {
  const res = s.split('').reduce((prev, c) => {
    if (c.match(/[\u4e00-\u9fa5]/)) {
      return prev + 2
    }
    //基本汉字补充
    else if (c.match(/[\u9FA6-\u9fcb]/)) {
      return prev + 2
    } else {
      return prev + 1
    }
  }, 0)

  return res
}

export const relativeTime = (isoTime: string): string => {
  const now = new Date()
  const inputTime = new Date(isoTime)
  const diffInMs = now.getTime() - inputTime.getTime()
  const diffInHours = diffInMs / (1000 * 60 * 60)
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24)

  if (diffInHours < 1) {
    return '最近'
  } else if (diffInHours < 24) {
    return `${Math.floor(diffInHours)} 小时前`
  } else if (diffInDays < 2) {
    return '昨天'
  } else if (diffInDays < 3) {
    return '前天'
  } else {
    return `${inputTime.getFullYear()}-${
      inputTime.getMonth() + 1
    }-${inputTime.getDate()}`
  }
}

export const localDateFormat = (date: Date, lang: string) => {
  const isZh = lang?.includes('zh')

  if (isZh) {
    return format(date, 'yyyy.MM.dd HH:mm')
  }
  return format(date, 'dd MMM yyyy, HH:mm')
}
