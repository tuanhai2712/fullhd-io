import React from "react";
import styled from 'styled-components';

const LoadingDiv = styled.div`
  position: absolute;
  background-color: #fffde7;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;

  div {
    display: block;
    margin: 6% auto 0px;
    width: 800px;
    height: 600px;
  }
`

export default function Loading() {
  return (
    <LoadingDiv>
      <div style={{ background: `url(${process.env.PUBLIC_URL}/loading.webp)` }}></div>
    </LoadingDiv>
  )
}