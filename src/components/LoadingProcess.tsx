import React, { useState, useEffect } from "react";
import styled from 'styled-components';

const LoadingDiv = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10000000;
  background-color: rgb(91 88 121 / 52%);

  div {
    width: ${window.innerWidth}px;
    height: ${window.innerHeight}px;
    background-size: 30% !important;
  }
`

export default function LoadingProcess() {
  return <LoadingDiv>
    <div style={{ background: `url(${process.env.PUBLIC_URL}/tradeLoading.gif) center center no-repeat` }}></div>
  </LoadingDiv>
}