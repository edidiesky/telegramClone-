import React from "react";
import styled from "styled-components";
import MessageIndex from "./message";
import ProfileIndex from "./profile";

export default function HomeIndex() {
  return (
    <HomeIndexContainer>
      <MessageIndex/>
      <ProfileIndex/>
    </HomeIndexContainer>
  );
}

const HomeIndexContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 25vw;
  overflow: hidden;
  height: 100%;
  
  @media (max-width:1080px) {
    grid-template-columns: 1fr .8fr;
  }
  @media (max-width:780px) {
    grid-template-columns: 1fr .7fr;
  }
  @media (max-width:580px) {
    grid-template-columns: 1fr;
  }
`;
