import * as actionTypes from './constants'
import { Map } from 'immutable'

const defaultState = Map({
  topBanners:[]
})

// console.log(defaultState);

function reducer(state = defaultState,action) {
  switch (action.type) {
    case actionTypes.CHANG_TOP_BANNERS:
      return state.set("topBanners",action.topBanners);
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