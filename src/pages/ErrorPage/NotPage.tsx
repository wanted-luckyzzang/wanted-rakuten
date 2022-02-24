import React from "react";
import { useNavigate } from 'react-router';
import { DataType } from 'types';
import styled from "styled-components";


interface NotFoundPageParams {
  data: DataType | undefined; 
}

const NotPage = (props: NotFoundPageParams): JSX.Element => {
  const { data } = props;
  const navigate = useNavigate();
  return(
    <>
      <Wrapper>
        <Title>404</Title>
        <Desc>Not Found</Desc>
        <BackTo onClick={() => navigate("/")}>메인으로</BackTo>
      </Wrapper>
    </>
  )
}


export default NotPage;

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

const BackTo = styled.button`
  margin: auto;
  display: flex;
  margin-top: 40px;
  border-radius: 10px;
  width: 200px;
  height: 40px;
  font-size: 1.5rem;
  align-items: center;
  justify-content: center;
  background-color: #CC313D;
  border: none;
  color: #FFFFFF;
`
