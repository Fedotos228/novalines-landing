import { instance } from '@/api/api.intersepter'
import { heroQuery } from './landing.helper'

export const LandingService = {
  async getHero() {
    return await instance.get(`/home?${heroQuery}`)
  },
  async getJobs() {
    return await instance.get(`/jobs?populate=*`)
  }
}