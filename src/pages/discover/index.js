import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { DiscoverWrap, TopMenu } from './style';
import { dicoverMenu } from '@/common/local_data';
import { NavLink } from 'react-router-dom';

const index = memo((props) => {
  const { route } = props;
  return (
    <DiscoverWrap>
      <div className="top">
       <TopMenu className="wrap-v1">
         {
           dicoverMenu.map(item => {
             return (<div className="item" key={item.title}>
               <NavLink to={item.link}>{item.title}</NavLink>
             </div>)
           })
         }
       </TopMenu>
      </div>
      {renderRoutes(route.routes)}
    </DiscoverWrap>
  );
});

export default index;