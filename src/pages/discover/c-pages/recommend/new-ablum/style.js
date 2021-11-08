import styled from 'styled-components'

export const NewAblumWrapper = styled.div`
  margin-top: 20px;
`
export const NewAblumContent = styled.div`
    position: relative;
    margin: 20px auto;
    padding: 25px 10px 15px 10px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
  .arrow {    
    width: 17px;
    height: 17px;
    cursor: pointer;
  }
  .arrow-left {
    position: absolute;
    top: 45%;
    left: 1%;
    transform: translateY(-50%);
    background-position: -265px -75px;
  }
  .arrow-right {
    position: absolute;
    top: 50%;
    right: 1%;
    transform: translateY(-50%);
    background-position: -300px -75px;
  }
  .ablum {
    width: 640px;
    height: 150px;
    margin: 0 auto;
    .page {
      display: flex !important;
      justify-content: space-around;
    }
  }
  
`