// http://localhost:1337/api/home?populate=Hero

import { getLanguageFromLocalStorage } from '@/libs/utils'
import qs from 'qs'
const language = getLanguageFromLocalStorage()

export const heroQuery = qs.stringify({
  populate: {
    hero: {
      populate: ['hero,video', 'hero,linkedButton']
    },
    encodeValuesOnly: true,
  }
})

export const jobsQuery = qs.stringify({
  populate: '*',
  pagination: {
    pageSize: 4
  },
  locale: language
})

