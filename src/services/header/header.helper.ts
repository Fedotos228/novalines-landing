import qs from 'qs'

export const logoQuery = qs.stringify({
  populate: ['header.logo'],
  encodeValuesOnly: true,
})

export const navQuery = qs.stringify({
  populate: ['header.navigation'],
  encodeValuesOnly: true,
})
