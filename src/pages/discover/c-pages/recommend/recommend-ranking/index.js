import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getTopListAction } from '../store/actionCreators'

import ThemeHeaderRCM from '@/components/theme-header-rcm'
import TopRanking from '@/components/TopRanking'
import { RankingContent } from './style'

function Ranking() {

  const { upRanking, newRanking, originRanking } = useSelector(state => ({
    upRanking: state.recommend.get('upRanking'),
    newRanking: state.recommend.get('newRanking'),
    originRanking: state.recommend.get('originRanking')
  }), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTopListAction(0));
    dispatch(getTopListAction(2));
    dispatch(getTopListAction(3));
  }, [dispatch])

  console.log(upRanking);
  return (
    <div>
      <ThemeHeaderRCM title="榜单" target="/discover/ranking" />
      <RankingContent>
        <TopRanking info={upRanking} />
        <TopRanking info={newRanking} />
        <TopRanking info={originRanking} />
      </RankingContent>
    </div>
  )
}

export default Ranking
