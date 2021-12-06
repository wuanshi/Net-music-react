import { getSongDetail } from '@/services/player'
import * as actionTypes from './constants'

const changeCurrentSongAction = (res) => ({
  type: actionTypes.CHANG_CURRENT_SONG,
  currentSong: res.songs[0]
})

const changeCurrentSongIndexAction = (currentIndex) => ({
  type: actionTypes.CHANG_CURRENT_SONG_INDEX,
  currentSongIndex: currentIndex
})

const changePlayListAction = (res) => ({
  type: actionTypes.CHANG_PLAY_LIST,
  currentSong:res.songs[0]
})

export const getSongDetailAction = (id) => {
  return dispatch => {
    getSongDetail(id).then(res => {
      // console.log('next',res.data);
      dispatch(changeCurrentSongAction(res?.data))
      dispatch(changePlayListAction(res?.data))
    })
  }
}

export const changeCurrentSongAndIndexAction = (tag) => {
  return (dispatch, getState) => {
    const playList = getState().player.get('playList')
    let currentIndex = getState().player.get('currentSongIndex') + tag
    if(currentIndex >= playList.length) {
      currentIndex = 0
    }
    if(currentIndex < 0) {
      currentIndex = playList.length
    }
    dispatch(changeCurrentSongIndexAction(currentIndex))
    dispatch(getSongDetailAction(playList[currentIndex]?.id))
    // console.log(getState().player.get('currentSong'));
  }
}