import React from "react";
import styled from "styled-components";
import ProfileLeftIndex from "./left";
import ProfileRightIndex from "./right";

export default function ProfileIndex() {
  let userInfo = "user";
  return (
    <ProfileIndexContent className={userInfo = "user"? 'active':""}>
      <div className="profileWrapper w-90 auto">
        <ProfileLeftIndex />
        <ProfileRightIndex />
      </div>
    </ProfileIndexContent>
  );
}

const ProfileIndexContent = styled.div`
  width: 100%;
  padding: 7rem 0;
  &.active {
    background-color: var(--light-grey);
  }
  .profileWrapper {
    display: grid;
    place-items: start;
    grid-gap: 3rem;
    grid-template-columns: 30vw 1fr;
    @media (max-width:780px) {
      grid-template-columns: 1fr;
    }
  }
`;
