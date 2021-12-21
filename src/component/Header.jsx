import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
	height: 10%;
  background-color: #a4508b;
  background-image: linear-gradient(326deg, #a4508b 0%, #5f0a87 74%);
  text-align: center;
	border-bottom: 2px solid black;
`;

const P = styled.p`
  color:#D6C1A0;
	margin: 0;
	padding-top: 20px;
	padding-bottom: 20px;
  font-weight: 600;
  font-size: larger;
`;

function Header() {
  return (
    <Container>
      <P>Let's Watch</P>
    </Container>
  );
}
export default Header;
