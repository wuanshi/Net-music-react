import React from 'react'
import { NavLink } from 'react-router-dom';

import { ThemeHeaderWrapper } from './style'

function ThemeHeaderRCM(props) {

  const { title = "", types = [], target = "" } = props;

  return (
    <ThemeHeaderWrapper>
      <div className="left">
        <div className="icon sprite_02">
        </div>
        <div className="title">
          {title}
        </div>
        {
          types.map((item,index) => {
            return (
              <div key={item}>
                <a href="/#">{item}</a>
                <span className="item" style={{display:index === types.length -1 ? 'none' : 'inline-block'}}>|</span>
              </div>
            )
          })
        }
      </div>
      <div className="right">
        <NavLink to={target}>更多</NavLink>
        <div className="sprite_02 more"></div>
      </div>
    </ThemeHeaderWrapper>
  )
}

export default ThemeHeaderRCM
