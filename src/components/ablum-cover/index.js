import React from 'react'

import { AblumCoverWrapper } from './style'

function AblumCover(props) {
  const { info } = props
  return (
    <AblumCoverWrapper id={info.id}>
      <div>
        <img src={`${info.picUrl}?param=100y100`} alt="" />
        <div className="sprite_covor bg-cover"></div>
        <div className="sprite_icon play"></div>
      </div>
      <a href="/#" className="title">{info.name}</a>
      <p>{info.artist.name}</p>
    </AblumCoverWrapper>
  )
}

export default AblumCover
