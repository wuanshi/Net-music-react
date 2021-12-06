import styled from "styled-components";

export const AblumCoverWrapper = styled.a.attrs(props => ({
  href: `https://music.163.com/#/album?id=${props.id}`
}))`
  position: relative;
  width:120px;
  
  .bg-cover {
    position: absolute;
    left: 0;
    top: 0;
    width:118px;
    height:100px;
    /* text-indent: -9999px; */
    background-position: 0px -570px;
  }

  /* .bg-cover:hover {
    &::after {
      position: absolute;
      top: 78px;
      right: 25px;
      width: 20px;
      height: 20px;
      z-index: 999;
      background-position: 0 -86px;
    }
  } */

  .bg-cover:hover {
    & + .play {
      position: absolute;
      top: 78px;
      right: 25px;
      width: 20px;
      height: 20px;
      z-index: 999;
      background-position: 0 -86px;
    }
  }
  
  .play:hover {
    position: absolute;
    top: 78px;
    right: 25px;
    width: 20px;
    height: 20px;
    z-index: 999;
    background-position: 0 -86px;
  }
  
  .title {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient:vertical;
    -webkit-line-clamp: 2;
  }
`