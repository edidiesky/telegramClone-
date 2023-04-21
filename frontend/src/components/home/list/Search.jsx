import React from "react";
import styled from "styled-components";

export default function Search() {
  return (
    <SearchContainer>
      <form action="" className="w-90 auto flex">
        <input
          type="text"
          placeholder="Search"
          className="input fs-16 w-100 text-white"
        />
      </form>
    </SearchContainer>
  );
}

const SearchContainer = styled.div`
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 3000;
  background-color: var(--dark-4);
  padding: 1rem 0;
  form {
    height: 4rem;
    background-color: var(--dark-3);
    border-radius: 4px;
    position: sticky;
    top: 0;
    z-index: 3000;
    left: 0;
    .input {
      padding: 0 2rem;
    }
  }
`;
