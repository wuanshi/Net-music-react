import * as actionTypes from './constants'

import { getTopBanners,getHotRecommend } from '@/services/recommend'

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANG_TOP_BANNERS,
  topBanners: res.banners
})

const changeHotRecommend = res => ({
  type:actionTypes.CHANG_HOT_RECOMMEND,
  hotRecommend:res.result
})

export const getTopBannerAction = () => {
  return dispatch => {
    getTopBanners().then(res => {
      dispatch(changeTopBannerAction(res.data));
    })
  }
}

export const getHotRecommendAction = () => {
  return dispatch => {
    getHotRecommend(8).then(res => {
      console.log(res);
      dispatch(changeHotRecommend(res.data))
    })
  }
}