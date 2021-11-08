import styled from "styled-components";

export const PlayBarWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 53px;
  background-position: 0 0;
  background-repeat: repeat;
  .content {
    display: flex;
    height: 53px;
    align-items: center;
    justify-content: space-between;
    .left-control {
      display: flex;
      align-items: center;
      width: 137px;      
      .btn {
        width: 28px;
        height: 28px;
        margin-right: 8px;
      }

      .prev {
        background-position: 0 -128px;
      }

      .pause {
        width: 36px;
        height: 36px;
        margin-right: 8px;
        background-position: 0 -202px;
      }

      .play {
        width: 36px;
        height: 36px;
        margin-right: 8px;

      }

      .next {
        background-position: -78px -128px;
      }
    }

    .progress {
      display: flex;
      position: relative;
      flex: 1;
      .image {
        margin-right: 8px;
        .image-cover {
          position: absolute;
          top: 0;
          left: 0;
          width: 34px;
          height: 34px;
          background-position: 0 -80px;
        }
      }

      .info {
        flex: 1;
        .song {
          .song-name {
            margin-right: 10px;
            color: #e8e8e8;
          }
        }
        .slide-bar {
          display: flex;
          height: 8px;
          color: #a1a1a1;
          .slider {
            width: 84%;
            .ant-slider-rail {
              background: url(${require('@/assets/img/progress_bar.png').default});
              background-position: 0 -30px;
            }
            .ant-slider-track {
              background: url(${require('@/assets/img/progress_bar.png').default});
              background-position: 0 -68px;
            }
            .ant-slider-handle {
              background: url(${require('@/assets/img/sprite_icon.png').default});
              background-position: -44px -284px;
            }
          }
          .current {
            
          }
          .middle {
            padding: 0 2px;
          }
          .duration {
            
          }
        }
      }
    }

    .right-op {
      width: 213px;
    }

  }
`