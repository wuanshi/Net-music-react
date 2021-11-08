import React, { memo } from 'react';

import { RecommendWrapper,RecommendLeft, RecommendRight } from './style'

import HotBanner from './top-banner'
import HotRecommend from './hot-recommend';
import NewAblum from './new-ablum'
import RecommendRanking from './recommend-ranking'
function Recommend() {

 
  return (
    <RecommendWrapper>
      <HotBanner />
      <div className="content wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <NewAblum />
          <RecommendRanking />
        </RecommendLeft>
        <RecommendRight>
          eee
        </RecommendRight>
      </div>


    </RecommendWrapper>
  );

}



export default memo(Recommend);

// function Recommend(props) {
//   const { getBanners,topBanners } = props;
//   useEffect(() => {
//     getBanners()
//   }, [getBanners])
//   return (
//     <div>
//       <h2>Recommend</h2>
//     </div>
//   );

// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners: () => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend));