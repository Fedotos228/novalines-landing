import qs from 'qs'

export const headerQuery = (lang: string) => qs.stringify({
  populate: {
    header: {
      populate: ['header,logo', 'header,navigation']
    }
  },
  locale: lang,
  encodeValuesOnly: true,
})