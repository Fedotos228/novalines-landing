import { LandingService } from '@/services/landing/landing.service'
import { useQuery } from '@tanstack/react-query'

export const useJobs = () => {
  return useQuery({
    queryKey: ['job'],
    queryFn: LandingService.getJobs
  })
}