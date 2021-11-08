import React, { memo, useState, useEffect, useCallback, useRef } from 'react'

import { Slider } from 'antd';
import { PlayBarWrapper } from './style'
export default memo(function PlayerBar(props) {

  const [isPlaying, setIsPlaying] = useState(false)

  const audioRef = useRef();

  useEffect(() => {
    
  })

  const playMusic = useCallback(() => {
    audioRef.current.src = "https://music.163.com/song/media/outer/url?id=1888864257.mp3";
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying)
  }, [isPlaying])



  return (
    <PlayBarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <div className="left-control">
          <div className="prev btn sprite_player"></div>
          <div className="pause sprite_player" onClick={playMusic}></div>
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
                <Slider defaultValue={30} />
              </div>
              <span className="current">{"2:20"}</span>
              <span className="middle">/</span>
              <span className="duration">{"4:10"}</span>
            </div>
          </div>
        </div>
        <div className="right-op">

        </div>
      </div>
      <audio ref={audioRef} />
    </PlayBarWrapper>
  )
})
