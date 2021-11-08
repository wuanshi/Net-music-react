import * as actionTypes from './constants'

import { getTopBanners, getHotRecommend, getNewAblums, getTopList } from '@/services/recommend'

const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANG_TOP_BANNERS,
  topBanners: res.banners
})

const changeHotRecommend = res => ({
  type: actionTypes.CHANG_HOT_RECOMMEND,
  hotRecommend: res.result
})

const changeNewAblumAction = res => ({
  type: actionTypes.CHANG_NEW_ABLUM,
  newAblum: res.albums
})

const changeUpRankingAction = res => ({
  type:actionTypes.CHANG_UP_RANKING,
  upRanking:res.playlist
})

const changeNewRankingAction = res => ({
  type:actionTypes.CHANG_NEW_RANKING,
  newRanking:res.playlist
})

const changeOriginRankingAction = res => ({
  type:actionTypes.CHANG_ORIGIN_RANKING,
  originRanking:res.playlist
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
      // console.log(res);
      dispatch(changeHotRecommend(res.data))
    })
  }
}

export const getNewAblumAction = (limit) => {
  return dispatch => {
    getNewAblums(limit).then(res => {
      // console.log('newAblum',res.data);
      dispatch(changeNewAblumAction(res.data))
    })
  }
}

export const getTopListAction = (idx) => {
  return dispatch => {
    getTopList(idx).then(res => {
      // console.log(res.data);
      switch(idx) {
        case 0:
            dispatch(changeUpRankingAction(res.data))
          break;
        case 2:
            dispatch(changeNewRankingAction(res.data))
          break;
        case 3:
            dispatch(changeOriginRankingAction(res.data))
          break;
        default:
          
      }
    })
    
    
  }
}