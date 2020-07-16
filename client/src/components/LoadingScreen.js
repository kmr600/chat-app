import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  z-index: 1000;
`;
const Title = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 36px;
`;

const LoadingScreen = () => {
  const { loading } = useSelector(state => state.auth);

  return (
    loading && (
      <Wrapper>
        <Title>
          <span role="img" aria-label="logo">
            💬
          </span>
          <br/>Loading chatroom...
        </Title>
      </Wrapper>
    )
  );
};

export default LoadingScreen;
