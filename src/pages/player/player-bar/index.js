import React, { memo, useState, useEffect, useCallback, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getSongDetailAction } from '../store/actionCreators'
import { formatMinuteSecond } from '@/utils/format'

import { Slider } from 'antd';
import { PlayBarWrapper } from './style'

export default memo(function PlayerBar(props) {

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime,setCurrentTime] = useState(0)
  const audioRef = useRef();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongDetailAction(1888864257))
  },[dispatch])

  const { duration } = useSelector(state => ({
    duration:state.player.get('currentSong').dt
  }),shallowEqual)

  const playMusic = useCallback(() => {
    audioRef.current.src = "https://music.163.com/song/media/outer/url?id=1888864257.mp3";
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  const updateTime = (e) => {
    setCurrentTime(e.target.currentTime)
    // console.log(e.target.currentTime);
  }

  const handleDrag = (e) => {
    let time = e / 100 * duration / 1000
    setCurrentTime(time)
    audioRef.current.currentTime = time
  }
  return (
    <PlayBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <div className="left-control">
          <div className="prev btn sprite_player"></div>
          <div className={ isPlaying ? "sprite_player play" : "sprite_player pause"} onClick={playMusic}></div>
          <div className="next btn sprite_player"></div>
        </div>
        <div className="progress">
          <div className="image">
            <img src="https://p1.music.126.net/vV1-DnaotHtAxyhcoKcJew==/109951166543935315.jpg?param=34y34" alt="" />
            <div className="image-cover sprite_player"></div>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{"周五了周五了"}</span>
              <a href="/#">{"朱星驰"}</a>
            </div>
            <div className="slide-bar">
              <div className="slider">
                <Slider value={currentTime * 1000 / duration * 100} onChange={(e) => {handleDrag(e)}}/>
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
      <audio ref={audioRef} onTimeUpdate={e => {updateTime(e)}} />
    </PlayBarWrapper>
  )
})
