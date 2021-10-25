import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getTopBannerAction } from './store/actionCreators';

function Recommend() {
  // const recommend = useSelector(state => ({
  //   topBanners:state.recommend.topBanners
  // }))

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

  console.log('topBanners', topBanners);
  return (
    <div>
      <h2>Recommend</h2>
    </div>
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