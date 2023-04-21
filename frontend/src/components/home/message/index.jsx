import React from "react";
import styled from "styled-components";
import Chats from "./Chats";
import Top from "./Top";

export default function MessageIndex() {
  return <MessageContainer className="flex column gap-2">
    <Top/>
    <Chats/>
  </MessageContainer>;
}
const MessageContainer = styled.div`
  width: auto;
  overflow: hidden;
  height: 100%;
  background-color: var(--primary);
`;
