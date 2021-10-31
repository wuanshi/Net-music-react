import styled from 'styled-components'

export const BannerWrapper = styled.div`
  background: url(${props => props.bgImage}) center center/6000px;
  .banner {
    display: flex;
    background-color: red;
    height: 270px;
    position: relative;
  }
`

export const BannerLeft = styled.div`
  width: 730px;
  .banner-item {
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
    }
  }
`

export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank"
})`
  background: url(${require('@/assets/img/download.png').default});
  height: 270px;
  width: 254px;
`