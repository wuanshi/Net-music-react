import styled from 'styled-components'

export const ThemeHeaderWrapper = styled.div`
  display: flex;
  height: 35px;
  justify-content: space-between;
  width: 100%;
  line-height: 35px;
  border-bottom: 2px solid red;
  .left {
    display: flex;
    .icon {
      width: 35px;
      height: 35px;
      background-position: -220px -153px;
    }
    .title {
      font-size: 20px;
      margin-right: 15px;
    }
    .item {
      padding: 0 8px;
    }
  }

  .right {
    display: flex;
    align-items: center;
    .more {
      height: 14px;
      width: 14px;
      background-position: 0 -240px;
      margin: 0 5px;
    } 
  }
`