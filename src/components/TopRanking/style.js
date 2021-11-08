import styled from "styled-components";

export const TopRankingWrapper = styled.div`
  width: 230px;
  .header {
    display: flex;
    padding: 20px 0 0 19px;
    height: 120px;
    .top-left {
      position: relative;
      .image-cover {
        position: absolute;
        top: 0;
        left: 0;
        width: 80px;
        height: 80px;
        background-position: 0 0;
      }
    }
    
    .top-right {
      margin: 6px 0 0 10px;
      .title {
        font-size: 14px;
        font-weight: 600;
        color: #333333;
      }
      .operate {
        display: flex;
        margin-top: 10px;
        .player {
          width: 22px;
          height: 22px;
          margin-right: 10px;
          background-position: -267px -205px;
        }
        .player:hover {
          background-position: -267px -235px;
        }
        .add-list {
          width: 22px;
          height: 22px;
          margin-right: 10px;
          background-position: -300px -205px;
        }
        .add-list:hover {
          background-position: -300px -235px;
        }
      }
    }
  }

  .song-list {

    .list-item {
      display: flex;
      width: 230px;
      height: 32px;
      line-height: 32px;
      .count {
        width: 35px;
        margin-left: 10px;
        font-size: 15px;
        font-weight: 600;
        text-align: center;
        color: rgb(102, 102, 102);
      }

      .info {
        display: flex;
        width: 170px;
        /* flex: 1; */
        justify-content: space-between;
        .item-name {
          flex: 1;
        }
        
        &:hover .oper {
          display: flex;
          width: 82px;
          align-items: center;
          .player {
            width: 17px;
            height: 17px;
            margin-left:5px;
            background-position: -267px -288px;
          }
          .add {
            width: 17px;
            height: 17px;
            margin-left:5px;
            background-position: 0 -700px;
          }
          .collect {
            width: 17px;
            height: 17px;
            margin-left:5px;
            background-position: -297px -288px;
          }
        }
      }
    }
  }

  .footer {
    display: flex;
    line-height: 32px;
    flex-direction: row-reverse;
    a {
      margin-right: 10px;
    }
  }
`