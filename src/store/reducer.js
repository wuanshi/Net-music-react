import { combineReducers } from 'redux'

import { reducer as recommendReducer} from '../pages/discover/c-pages/recommend/store'
import { reducer as playerReducer } from '../pages/player/store'
// 将不同 reducer 合成一个 reducer
const cReducer = combineReducers({
  recommend:recommendReducer,
  player:playerReducer
})

export default cReducer