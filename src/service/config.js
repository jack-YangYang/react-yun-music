const DEV_BASE_URL = 'http://123.207.32.32:9001'
const PRO_BASE_URL = 'https:production.org'

export const BASE_URL = process.env.NODE_ENV === 'production' ? PRO_BASE_URL : DEV_BASE_URL
export const TIMEOUT = 5000