import qs from 'qs'

export const headerQuery = qs.stringify({
  populate: {
    header: {
      populate: ['header,logo', 'header,navigation']
    }
  },
  encodeValuesOnly: true,
})