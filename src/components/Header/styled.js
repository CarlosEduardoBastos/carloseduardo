import styled from "styled-components";

export const ContainerHeader = styled.header`
  width: 100%;
  background-color: #282A36;
  border-bottom: 1px solid #fff;
  section {
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 20px 20px;
  }
`;

export const ContainerLogo = styled.div`
  a{
    color: #fff;
    font-size: 1.5rem;
  }
`;

export const Nav = styled.div`
  ul{
    display: flex;
    align-items: center;
    justify-content: space-between;

    li{
      padding: 10px;

      a{
        font-size: 1.2rem;
      }
    }
  }

`