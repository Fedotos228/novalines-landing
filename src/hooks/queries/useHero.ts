import { LandingService } from '@/services/landing/landing.service'
import { useQuery } from '@tanstack/react-query'

export const useHero = () => {
  return useQuery({
    queryKey: ['hero'],
    queryFn: LandingService.getHero,
    select: (data) => data.data.data.attributes.hero,
  })
}