import { HeaderService } from '@/services/header/header.service'
import { useQuery } from '@tanstack/react-query'

export const useHeader = () => {
  return useQuery({
    queryKey: ['header'],
    queryFn: HeaderService.getHeader,
    select: data => data.data.data.attributes.header
  })
}