import React from 'react'

import { format } from '@/utils/format'

import { SongCoverWrapper } from './style'

function SongCover(props) {
  const { info } = props
  return (
      <SongCoverWrapper className="image" url={props.url}>
        <img src={`${info.picUrl}?param=140y140`} alt="" />
        <div className="coverInfo">
          <div className="playCount">
            <div className="earphone sprite_icon"></div>
            {format(info.playCount)}
          </div>
          <div className="play sprite_icon">
          </div>
        </div>
        <p>{info.name}</p>
      </SongCoverWrapper>
  )
}

export default SongCover
