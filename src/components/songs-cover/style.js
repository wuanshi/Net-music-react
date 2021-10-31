import styled from 'styled-components'

export const SongCoverWrapper = styled.a.attrs(props => ({
  href: `${props.url}`
}))`
  width: 140px;
  position: relative;

  
  .coverInfo {
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 120px;
    left: 0;
    width: 100%;
    height: 20px;
    color: rgb(204, 204, 204);
    background: url(${require("@/assets/img/coverall.png").default});
    background-position: 0 -544px;
    .playCount {
      display: flex;
      .earphone {
        width: 20px;
        height: 20px;
        margin-left: 3px;
        background-position: 0 -20px;
      }
    }
    
    .play {
      width: 20px;
      height: 20px;
      background-position: 0 2px;
    }

    p {
      word-wrap: break-word;
      word-break: break-all;
    }
  }
`