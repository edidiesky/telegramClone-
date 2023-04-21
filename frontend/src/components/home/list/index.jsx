import React from "react";
import styled from "styled-components";
import ChatList from "./ChatList";
import Search from "./Search";

export default function ListIndex() {
  return (
    <ListIndexContainer className="flex column gap-2">
      <Search />
      <ChatList />
    </ListIndexContainer>
  );
}
const ListIndexContainer = styled.div`
  width: auto;
  height: 100vh;
  position: sticky;
  top: 0;
  background-color: var(--dark-4);
  color: #fff;
  max-height: 100vh;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
    background: #fff;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: #777;
    border-radius: 10px;
    transition: all 0.5s;
    &:hover {
      background: #333;
    }
  }
  @media (max-width: 780px) {
    display: none;
  }
`;
