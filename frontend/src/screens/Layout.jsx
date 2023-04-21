import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Sidebar } from "../components/common";
import ListIndex from "../components/home/list";
export default function Layout() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const container = document.querySelector(".layout");
    const height = container.getBoundingClientRect().height;
    setHeight(height);
  }, []);

  return (
    <LayoutContainer className="layout" style={{ height }}>
      <Sidebar/>
      <ListIndex/>
      <Outlet />
    </LayoutContainer>
  );
}

const LayoutContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 90px 370px 1fr;
  @media (max-width:1080px) {
    grid-template-columns: 90px .4fr 1fr;
  }
  @media (max-width:780px) {
    grid-template-columns: 90px .6fr 1fr;
  }
  @media (max-width:780px) {
    grid-template-columns:90px 1fr;
  }
`;
