import React from "react";
import { FaLocationArrow, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Rating from "../../../common/Rating";

export default function UserTopInfo() {
  return (
    <UserTopInfoContent>
      {/* top */}
      <div className="w-100 flex item-center justify-center column gap-1">
        {/* images */}
        {/* <img
          src="https://fiverr-res.cloudinary.com/t_profile_original,q_auto,f_auto/attachments/profile/photo/27adb135f2b57c4298fbf62c2a6f6425-806712771571943595909/JPEG_20191025_025953_4527436476841105584.jpg"
          alt=""
          className="image"
        /> */}
        {/* profile name */}

        {/* profile image */}
        <div className="w-100 ProfileImage flex item-center justify-center cardImage">
          <div className="image dark flex item-center justify-center">
            <svg
              width="16"
              height="16"
              className="images"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 5.8182C6.29294 5.8182 4.90909 7.20205 4.90909 8.90911C4.90909 10.6162 6.29294 12 8 12C9.70706 12 11.0909 10.6162 11.0909 8.90911C11.0909 7.20205 9.70706 5.8182 8 5.8182Z"></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1.45455 15.2727C1.06878 15.2727 0.698807 15.1195 0.426027 14.8467C0.153246 14.5739 0 14.204 0 13.8182V4.36366C0 3.97789 0.153246 3.60792 0.426027 3.33514C0.698807 3.06236 1.06878 2.90911 1.45455 2.90911H4.36364L5.81818 0.727295H10.1818L11.6364 2.90911H14.5455C14.9312 2.90911 15.3012 3.06236 15.574 3.33514C15.8468 3.60792 16 3.97789 16 4.36366V13.8182C16 14.204 15.8468 14.5739 15.574 14.8467C15.3012 15.1195 14.9312 15.2727 14.5455 15.2727H1.45455ZM3.81818 8.90911C3.81818 6.59956 5.69045 4.72729 8 4.72729C10.3096 4.72729 12.1818 6.59956 12.1818 8.90911C12.1818 11.2187 10.3096 13.0909 8 13.0909C5.69045 13.0909 3.81818 11.2187 3.81818 8.90911ZM2.90909 5.09093C2.90909 5.49259 2.58348 5.8182 2.18182 5.8182C1.78016 5.8182 1.45455 5.49259 1.45455 5.09093C1.45455 4.68927 1.78016 4.36366 2.18182 4.36366C2.58348 4.36366 2.90909 4.68927 2.90909 5.09093Z"
              ></path>
            </svg>
          </div>
          <div className="image grey fs-35 text-grey flex item-center justify-center">
            E
          </div>
        </div>

        <Link to={"/"} className="fs-24 text-center text-dark">
          {/* name */}
          johncatangay
          {/* role */}
          <span className="block text-grey text-light fs-16">
            Aerial Roof Measurement Expert
          </span>
        </Link>
        {/* rating */}
        {/* <div className="w-100 flex item-center justify-center fs-18">
          <Rating value={5} />
        </div> */}
        {/* contact button */}
        {/* <div className="w-100 flex item-center gap-2">
          <Link className="contactBtn green family1">Contact Me</Link>
          <Link className="contactBtn family1">Contact Me</Link>
        </div> */}
        {/* previw button */}
        <Link className="contactBtn family1">Preview Fiverr Profile</Link>
      </div>
      {/* bototm */}
      <ul className="w-100 py-2 flex column gap-1">
        
        <li className="flex w-100 fs-16 text-grey text-light justify-space item-center">
          <span className="flex item-center gap-2">
            <FaLocationArrow /> From
          </span>
          <span className="text-bold">Philippines</span>
        </li>
        <li className="flex w-100 fs-16 text-grey text-light justify-space item-center">
          <span className="flex item-center gap-2">
            <FaUser /> Member since
          </span>
          <span className="text-bold">Oct 2019</span>
        </li>
        <li className="flex w-100 fs-16 text-grey text-light justify-space item-center">
          <span className="flex item-center gap-2">
            <FaUser /> Last Delivery
          </span>
          <span className="text-bold">1 Day</span>
        </li>
      </ul>
    </UserTopInfoContent>
  );
}

const UserTopInfoContent = styled.div`
  padding: 2rem;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: #fff;
  a:hover {
    text-decoration: underline;
  }
  .images {
    width: 6rem;
    height: 6rem;
    fill: #fff;
  }
  .ProfileImage {
    position: relative;
    width: 16rem;
    height: 16rem;
    border-radius: 50%;
    z-index: 300;
    &:hover .image {
      &.dark {
        opacity: 1;
        visibility: visible;
      }
      &.grey {
        opacity: 0;
        visibility: hidden;
      }
    }
  }

  .image {
    width: 16rem;
    height: 16rem;
    border-radius: 50%;
    transition: all 0.4s;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);

    &.grey {
      background-color: var(--light-grey);
    }
    &.dark {
      background-color: var(--grey-1);
      opacity: 0;
      visibility: hidden;
    }
  }
`;
