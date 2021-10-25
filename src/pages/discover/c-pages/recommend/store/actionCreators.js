import * as actionTypes from './constants'

import { getTopBanners } from '@/services/recommend'

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANG_TOP_BANNERS,
  topBanners: res.banners
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res.data));
    })
  }
}