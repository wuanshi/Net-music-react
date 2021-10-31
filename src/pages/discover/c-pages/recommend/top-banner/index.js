import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { Carousel } from 'antd'
import { BannerLeft, BannerRight, BannerWrapper } from './style'
import { getTopBannerAction } from '../store/actionCreators';

function TopBanner() {
  // const recommend = useSelector(state => ({
  //   topBanners:state.recommend.topBanners
  // }))
  const [current,setCurrent] = useState(0)
  // redux hooks 使用 
  // shallowEqual 作用是进行浅层比较 -> 非依赖改变数据组件 不进行重新渲染
  // hooks 缺陷
  const { topBanners } = useSelector(state => ({
    topBanners: state.recommend.get('topBanners')
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])
  function currentChange(from,to){
    setCurrent(to)
  }
  const bgImage = topBanners[current] && topBanners[current].imageUrl + "?imageView&blur=40x20"
  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="wrap-v2 banner">
        <BannerLeft>
          <Carousel autoplay effect="fade" beforeChange={currentChange}>
            {
              topBanners.map(item => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img src={item.imageUrl} className="image" alt="" />
                  </div>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
      </div>
    </BannerWrapper>

  )
}

export default TopBanner
