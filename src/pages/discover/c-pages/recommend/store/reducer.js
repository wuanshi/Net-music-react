import * as actionTypes from './constants'
import { Map } from 'immutable'

const defaultState = Map({
  topBanners: [],
  hotRecommend: [],
  newAblum: [],
  newRanking: {},
  upRanking: {},
  originRanking: {}
})

// console.log(defaultState);

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANG_TOP_BANNERS:
      return state.set("topBanners", action.topBanners);
    case actionTypes.CHANG_HOT_RECOMMEND:
      return state.set("hotRecommend", action.hotRecommend)
    case actionTypes.CHANG_NEW_ABLUM:
      return state.set("newAblum", action.newAblum)

    case actionTypes.CHANG_NEW_RANKING:
      return state.set("newRanking", action.newRanking)
    case actionTypes.CHANG_UP_RANKING:
      return state.set("upRanking", action.upRanking)
    case actionTypes.CHANG_ORIGIN_RANKING:
      return state.set("originRanking", action.originRanking)
    default:
      return state;
  }
}

// function reducer(state = defaultState,action) {
//   switch (action.type) {
//     case actionTypes.CHANG_TOP_BANNERS:
//       return {...state,topBanners:action.topBanners};
//     default:
//       return state;
//   }
// }

export default reducer;