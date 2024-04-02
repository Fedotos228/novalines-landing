import { instance } from '@/api/api.intersepter'
import { headerQuery } from './header.helper'

export const HeaderService = {
  async getHeader() {
    return await instance.get(`/setting?${headerQuery}`)
  },
}