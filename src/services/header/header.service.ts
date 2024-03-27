import { instance } from '@/api/api.intersepter'
import { logoQuery, navQuery } from './header.helper'

export const HeaderService = {
  async getLogo() {
    return await instance.get(`/setting?${logoQuery}`)
  },
  async getNav() {
    return await instance.get(`/setting?${navQuery}`)
  }
}