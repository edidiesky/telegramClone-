import React from "react";
import styled from "styled-components";
import { BiDotsVerticalRounded, BiPhone, BiSearch } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
export default function Top() {
  return (
    <MessageTopContainer>
      <div className="w-90 flex item-center justify-space auto">
        {/* profile name */}
        <h5 className={"fs-14 flex column gap-1 text-light text-white"}>
          boris-khentov
          <div className="span block fs-16 text-grey">Connecting</div>
        </h5>
        {/* profile icons */}
        <div className="flex item-center gap-1">
          <BiSearch className="fs-24 text-grey"/>
          <BiPhone className="fs-24 text-grey"/>
          <BiDotsVerticalRounded className="fs-24 text-grey"/>
        </div>
      </div>
    </MessageTopContainer>
  );
}
const MessageTopContainer = styled.div`
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 3000;
  padding: 2.4rem 0;
  background-color: var(--dark-3);
`;
