import styled from "styled-components";

export const Container = styled.div`
  margin: 20px auto;
  animation: is-rotating 1s infinite;
  border: 6px solid #e5e5e5;
  border-radius: 50%;
  border-top-color: #51d4db;
  height: 50px;
  width: 50px;

  @keyframes is-rotating {
  to {
    transform: rotate(1turn);
  }
}
`