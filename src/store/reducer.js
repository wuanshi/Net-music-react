import { combineReducers } from 'redux'

import { reducer as recommendReducer} from '../pages/discover/c-pages/recommend/store'

// 将不同 reducer 合成一个 reducer
const cReducer = combineReducers({
  recommend:recommendReducer
})

export default cReducer