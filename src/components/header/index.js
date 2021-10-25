import React, { memo } from 'react';
import { NavLink } from 'react-router-dom'

import { HeaderLeft, HeaderWapper, HeaderRight } from './style';
import { headerLinks } from '@/common/local_data'

import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

function showSelectItem(item, index) {
  if (index < 3) {
    return <NavLink to={item.link}>
      {item.title}
      <i className="sprite_01 icon"></i>
    </NavLink>
  }
  else {
    return <a href={item.link}>{item.title}</a>
  }
}

const index = memo(() => {
  return (
    <HeaderWapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01">网易云音乐</a>
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                // return <NavLink className="select-item" to={item.link} key={item.title}>{item.title}</NavLink>
                return <div key={item.title} className="select-item">
                  {showSelectItem(item, index)}
                </div>
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input className="search" placeholder="音乐/视频/电台/用户" prefix={<SearchOutlined />}/>
          <div className="center">创作者中心</div>
          <div>登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWapper>
  );
});

export default index;