import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { GoThreeBars } from "react-icons/go"
import { BiBell, BiHeart, BiMessage, BiSearch } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
const data = [
  { id: 1, title: "Fiverr Business", path: "/business" },
  { id: 2, title: "Explore", path: "/explore" },
  { id: 3, title: "English", path: "/product" },
  { id: 5, title: "Become a Seller", path: "/seller" },
];

const headerBottomData = [
  "Graphics & Design",
  "Digital Marketing",
  "Writing & Translation",
  "Video & Animation",
  "Music & Audio",
  "Programming & Tech",
  "Business",
  "Lifestyle",
  "AI Services",
];
export default function Header() {
  const [active, setActive] = useState(true);



  return (
    <HeaderWrapper>
    </HeaderWrapper>
  );
}


const HeaderWrapper = styled.div`
  width: 100%;
  z-index: 1000;
  .headerTopContainer {
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    .headerTopCenter {
    }
  }
  .HeaderBottom {
    overflow: auto;
    width: 100%;
    z-index: 5000;
    background-color: #fff;
  }
  .nav-links {
    min-width: 5rem;
  }
`;
