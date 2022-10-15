import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: 30px;
  background: #fff;
  margin: 10px;
  color: #000;
  text-align: center;
  padding: 5px 0px;
  transition: .3s;
  
  &:hover{
    background: transparent;
    border: 1px solid #fff;
    a{
    color: #fff;
    }
  }
  a{
    color: #000;
  }
`