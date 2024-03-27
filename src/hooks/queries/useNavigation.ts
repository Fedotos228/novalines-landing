import { HeaderService } from '@/services/header/header.service'
import { useQuery } from 'react-query'

export const useNavigation = () => {
  return useQuery({
    queryKey: ['nav'],
    queryFn: HeaderService.getNav,
    select: data => data.data.data.attributes.header.navigation,
  })
}
