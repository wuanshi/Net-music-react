import React, { memo, useState, useEffect, useCallback, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getSongDetailAction, changeCurrentSongAndIndexAction } from '../store/actionCreators'
import { getPlaySong } from '@/utils/format-utils'
import { formatMinuteSecond } from '@/utils/format'

import { Slider } from 'antd';
import { PlayBarWrapper } from './style'

export default memo(function PlayerBar(props) {

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [isChangeing, setIsChangeing] = useState(false)
  const audioRef = useRef();

  const { currentSong } = useSelector(state => ({
    currentSong: state.player.get('currentSong'),
  }), shallowEqual)

  const duration = currentSong?.dt || 0;
  const songName = currentSong?.name;
  const songerName = currentSong.ar && currentSong.ar[0].name

  const dispatch = useDispatch();

  useEffect(() => {
    // 应为 dispatch 不会变化，所以只有第一次执行
    console.log('dispatch');
    dispatch(getSongDetailAction(167876))
  }, [dispatch])

  useEffect(() => {
    audioRef.current.src = getPlaySong(currentSong.id)
    audioRef.current.play().then(() => {
      setIsPlaying(true)
    }).catch(() => {
      setIsPlaying(false)
    })
  },[currentSong])


  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const updateTime = (e) => {
    isChangeing || setCurrentTime(e.target.currentTime)
  }

  const handleDrag = (e) => {
    let time = e / 100 * duration / 1000
    setIsChangeing(true)
    setCurrentTime(time)
  }

  const handlePlayTime = useCallback(() => {
    audioRef.current.currentTime = currentTime
    setIsChangeing(false)
    if(!isPlaying) {
      playMusic()
    }
  },[isPlaying,playMusic,currentTime])

  const changeCurrentSongIndex = (tag) => {
    dispatch(changeCurrentSongAndIndexAction(tag))
  }

  const handleMusicEnd = () => {
    dispatch(changeCurrentSongAndIndexAction(1))
  }
  return (
    <PlayBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <div className="left-control">
          <div className="prev btn sprite_player" onClick={() => changeCurrentSongIndex(-1)}></div>
          <div className={isPlaying ? "sprite_player play" : "sprite_player pause"} onClick={() => playMusic()}></div>
          <div className="next btn sprite_player" onClick={() => changeCurrentSongIndex(1)}></div>
        </div>
        <div className="progress">
          <div className="image">
            <img src="https://p1.music.126.net/vV1-DnaotHtAxyhcoKcJew==/109951166543935315.jpg?param=34y34" alt="" />
            <div className="image-cover sprite_player"></div>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{songName}</span>
              <a href="/#">{songerName}</a>
            </div>
            <div className="slide-bar">
              <div className="slider">
                <Slider value={currentTime * 1000 / duration * 100} onChange={(e) => { handleDrag(e) }} onAfterChange={handlePlayTime} />
              </div>
              <span className="current">{formatMinuteSecond(currentTime * 1000)}</span>
              <span className="middle">/</span>
              <span className="duration">{formatMinuteSecond(duration)}</span>
            </div>
          </div>
        </div>
        <div className="right-op">

        </div>
      </div>
      <audio ref={audioRef} onTimeUpdate={e => { updateTime(e) }} onEnded={handleMusicEnd}/>
    </PlayBarWrapper>
  )
})
