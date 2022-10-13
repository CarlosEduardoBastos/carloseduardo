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
    padding: 20px 0px;
  }
`;

export const Content = styled.div`
  color: #fff;
  
  div{
    margin-bottom: 10px;
    h1{
      font-size: 1.5rem;
      font-weight: bold;
    }
  }

  p{
    max-width: 400px;
    font-size: 1.3rem;
  }
`

export const ContentImg = styled.div`
  
`