import * as actionTypes from './constants'
import { Map } from 'immutable'

const defaultState = Map({
  currentSong:{},

})

export default function reducer (state = defaultState,action) {
  switch (action.type) {
    case actionTypes.CHANG_CURRENT_SONG:
      // console.log('currentSong',action.currentSong);
      return state.set('currentSong',action.currentSong)
  
    default:
      return state;
  }
}