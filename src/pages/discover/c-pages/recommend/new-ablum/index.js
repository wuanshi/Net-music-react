import React, { useEffect, useRef } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import { getNewAblumAction } from "../store/actionCreators";

import { Carousel } from 'antd';
import ThemeHeaderRCM from "@/components/theme-header-rcm";
import AblumCover from '@/components/ablum-cover'
import { NewAblumWrapper, NewAblumContent } from './style'

function NewAblum() {

  const dispatch = useDispatch();
  
  const { newAblums } = useSelector(state => ({
    newAblums: state.recommend.get('newAblum')
  }), shallowEqual)

  const ref = useRef();

  useEffect(() => {
    dispatch(getNewAblumAction(10))
  }, [dispatch])

  console.log("newAblums", newAblums);
  return (
    <NewAblumWrapper>
      <ThemeHeaderRCM title="新碟上架" target="/discover/album" />
      <NewAblumContent>
        <button className="arrow arrow-left sprite_02" onClick={() => ref.current.prev()}></button>
        <div className="ablum">
          <Carousel dots={false} ref={ref}>
            {
              [0, 1].map(item => {
                return (
                  <div className="page" key={item}>
                    {
                      newAblums.length && newAblums.slice(item * 5, (item + 1) * 5).map((jtem, index) => {
                        return (
                          <AblumCover info={jtem} key={index} />
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>

        <button className="arrow arrow-right sprite_02" onClick={() => ref.current.next()}></button>
      </NewAblumContent>
    </NewAblumWrapper>
  )
}

export default NewAblum
