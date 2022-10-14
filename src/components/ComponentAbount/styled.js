import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background-color: #282A36;
  height: 100vh;
  padding: 90px 0px;
  section {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px;
  }

 @media (max-width: 900px) {
  padding: 30px 20px;
  height: 100%;
 }
`;

export const Content = styled.div`
  color: #fff;
  
  div{
    margin-bottom: 10px;
    h1{
      font-size: 1.8rem;
      font-weight: bold;
    }
  }

  p{
    max-width: 400px;
    font-size: 1.2rem;
    line-height: 1.2;
  }
`
export const ContentLink = styled.div`
  margin: 20px 0px;
  
  a{
    color: #000;
    padding: 10px 20px;
    background-color: #fff;
    text-align: center;
    transition: .4s;

    &:hover{
      border: 1px solid #fff;
      color: #fff;
      background: transparent;
    }
  }
`