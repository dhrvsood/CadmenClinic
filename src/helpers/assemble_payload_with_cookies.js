import Cookies from 'js-cookie'
import { getCSTDateTime } from '@/helpers/get_cst_date_time'

export const assemblePayloadWithCookies = (vals, event = 'lead') => ({
  ...vals,
  ...getCookieValues(),
  pixels: Object.keys(window.fbq?.instance?.pixelsByID || {}),
  event,
  userAgent: window.navigator.userAgent,
  url: `${window.location.host}${window.location.pathname}`,
  currentTime: getCSTDateTime()
})

export const getCookieValues = () => {
  const cookieNames = [
    'device',
    '_u_s',
    'referrer',
    '_u_m',
    '_u_c',
    '_fbc',
    '_fbp',
    '_u_gclid'
  ]
  const result = {}

  for (const name of cookieNames) {
    const value = Cookies.get(name)
    if (value) {
      result[name] = value
    }
  }

  return result
}
