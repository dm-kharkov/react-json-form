import createCache from '@emotion/cache'

export { history, store } from 'store'

export const cache = createCache({ key: 'css', prepend: true })
