import React, { memo } from 'react'
import { useDispatch } from 'react-redux'

import { getSongDetailAction } from '@/pages/player/store/actionCreators.js'

import { TopRankingWrapper } from './style'

export default memo(function TopRanking(props) {
  const { info } = props

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getSongDetailAction(id))
  // },[id])

  const PlayMusic = (id) => {
    dispatch(getSongDetailAction(id))
  }
  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="top-left">
          <img src={`${info.coverImgUrl}?param=80y80`} alt="" />
          <div className="image-cover sprite_covor"></div>
        </div>
        <div className="top-right">
          <div className="title">{info.name}</div>
          <div className="operate">
            <div className="player sprite_02"></div>
            <div className="add-list sprite_02"></div>
          </div>
        </div>
      </div>
      <div className="song-list">
        {
          info?.tracks && info.tracks.slice(0, 10).map((item, index) => {
            return (
              <li className="list-item" key={item.id}>
                <div className="count">{index + 1}</div>
                <div className="info">
                  <span className="item-name text-nowrap">{item.name}</span>
                  <div className="oper">
                    <div className="player sprite_02" onClick={() => PlayMusic(item.id)}></div>
                    <div className="add sprite_icon2"></div>
                    <div className="collect sprite_02"></div>
                  </div>
                </div>
              </li>
            )
          })
        }
      </div>
      <div className="footer">
        <a href="/#">查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  )
})
