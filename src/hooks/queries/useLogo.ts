import { HeaderService } from '@/services/header/header.service'
import { useQuery } from 'react-query'

export const useLogo = () => {
  return useQuery({
    queryKey: ['logo'],
    queryFn: HeaderService.getLogo,
    select: data => data.data.data.attributes.header.logo.data.attributes.url,
  })
}