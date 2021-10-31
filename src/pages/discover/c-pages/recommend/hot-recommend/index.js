import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';

import { getHotRecommendAction } from '../store/actionCreators'

import ThemeHeaderRCM from '@/components/theme-header-rcm'
import { HotRecommendWrapper,HotRecommendContent } from './style' 

import SongCover from '@/components/songs-cover'

function HotRecommend() {

  const dispatch = useDispatch();

  const { hotRecommend } = useSelector(state => ({
    hotRecommend:state.recommend.get('hotRecommend')
  }))

  useEffect(() => {
    dispatch(getHotRecommendAction())
  },[dispatch])

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRCM title="热门推荐" types={["华语","流行","摇滚","民谣","电子"]} target={"/discover/songs"}/>
      <HotRecommendContent>
        {
          hotRecommend.length && hotRecommend.map(item => {
            return <SongCover info={item} key={item.id} url="https://music.163.com/#/playlist?id=3136952023"/>
          })
        }
      </HotRecommendContent>

    </HotRecommendWrapper>
  )
}

export default HotRecommend;
