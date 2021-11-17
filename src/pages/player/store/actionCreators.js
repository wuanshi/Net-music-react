import { getSongDetail } from '@/services/player'
import * as actionTypes from './constants'

const changeCurrentSongAction = (res) => ({
  type: actionTypes.CHANG_CURRENT_SONG,
  currentSong: res.songs[0]
})



export const getSongDetailAction = (id) => {
  return dispatch => {
    getSongDetail(id).then(res => {
      // console.log('currentDetail',res.data.songs[0]);
      dispatch(changeCurrentSongAction(res?.data))
    })
  }
}