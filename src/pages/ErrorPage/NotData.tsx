import React from "react";
import styled from "styled-components";

const NotData = (): JSX.Element => {
  return(
    <>
      <Wrapper>
        <Title>500</Title>
        <Desc>Internet Server Error</Desc>
        <BackTo>데이터 요청에 실패하였습니다.</BackTo>
      </Wrapper>
    </>
  )
}

export default NotData;

const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  margin: auto;
`

const Title = styled.p`
  font-size: 6rem;
  text-align: center;
  color: #CC313D;
`

const Desc = styled.p`
  font-size: 2.5rem;
  text-align: center;
  margin-top: -20px;
  color: black;
`

const BackTo = styled.div`
  margin: auto;
  display: flex;
  margin-top: 40px;
  border-radius: 10px;
  width: max-content;
  height: 40px;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
  background-color: #CC313D;
  border: none;
  color: #FFFFFF;
`