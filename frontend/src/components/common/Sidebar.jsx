import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { HiBars3 } from "react-icons/hi2";
import { IoChatbubblesSharp } from "react-icons/io5";
import { BsFillFileFill } from "react-icons/bs";

export default function Sidebar() {
  return (
    <SidebarContent>
      <div className="w-100 py-2">
        <div className={"bar"} to={``}>
          <HiBars3 className="fs-30" />
          <div className="after item-center flex justify-center"></div>
        </div>

        <NavLink
          exact
          className={({ isActive }) =>
            isActive
              ? "nav-link active flex w-100 gap-2 item-center px-2 py-1  text-bold pt-2"
              : "nav-link flex w-100 gap-2 item-center px-2 py-1 text-bold pt-2"
          }
          to={`/`}
        >
          <div className="flex column family1 gap-1 fs-12 text-grey">
            <IoChatbubblesSharp />
            All Chats
          </div>
          <div className="after text-white">
            <div className="span">101+</div>
          </div>
        </NavLink>
        <NavLink
          exact
          className={({ isActive }) =>
            isActive
              ? "nav-link active flex w-100 gap-2 item-center px-2 py-1  text-bold pt-2"
              : "nav-link flex w-100 gap-2 item-center px-2 py-1 text-bold pt-2"
          }
          to={`/friends`}
        >
          <div className="flex family1 column gap-1 fs-12 text-grey">
            <div className="icon"></div>
            Content
          </div>
          <div className="after text-white">
            <div className="span">101+</div>
          </div>
        </NavLink>
        <NavLink
          exact
          className={({ isActive }) =>
            isActive
              ? "nav-link active flex w-100 gap-2 item-center px-2 py-1  text-bold pt-2"
              : "nav-link flex w-100 gap-2 item-center px-2 py-1 text-bold pt-2"
          }
          to={`/profile`}
        >
          <div className="flex family1 column gap-1 fs-12 text-grey">
            <div className="icon"></div>
            Channels
          </div>
          <div className="after text-white">
            <div className="span">101+</div>
          </div>
        </NavLink>
        <NavLink
          exact
          className={({ isActive }) =>
            isActive
              ? "nav-link active flex w-100 gap-2 item-center px-2 py-1  text-bold pt-2"
              : "nav-link flex w-100 gap-2 item-center px-2 py-1 text-bold pt-2"
          }
          to={`/settings`}
        >
          <div className="flex family1 column gap-1 fs-12 text-grey">
            <div className="icon"></div>
            Hackgroup
          </div>
          <div className="after text-white">
            <div className="span">101+</div>
          </div>
        </NavLink>
        <NavLink
          exact
          className={({ isActive }) =>
            isActive
              ? "nav-link active flex w-100 gap-2 item-center px-2 py-1  text-bold pt-2"
              : "nav-link flex w-100 gap-2 item-center px-2 py-1 text-bold pt-2"
          }
          to={`/follow`}
        >
          <div className="flex family1 column gap-1 fs-12 text-grey">
            <div className="icon"></div>
            Pumps
          </div>
          <div className="after text-white">
            <div className="span">101+</div>
          </div>
        </NavLink>
      </div>
    </SidebarContent>
  );
}

const SidebarContent = styled.div`
  width: auto;
  height: 100vh;
  position: sticky;
  top: 0;
  background-color: var(--primary);

  .nav-link {
    position: relative;
    padding: 1.7rem 1.4rem;
    width: 100%;
    .icon {
      width: 3.5rem;
      height: 2.8rem;
      background-color: var(--dark-3);
      border-radius: 2.5px;
    }
    &.active {
      background-color: var(--dark-3);
      .after {
        border: 3px solid var(--dark-3);
      }
      svg {
        font-size: 30px;
        color: var(--dark-1);
      }
    }
    .after {
      position: absolute;
      top: 10%;
      right: 35%;
      border-radius: 20px;
      border: 3px solid var(--primary);
      background-color: var(--dark-1);
      display: grid;
      padding: 0.2rem .4rem;
      place-items: center;
      @media (max-width:680px) {
        right: 45%;
      }
      .span {
        font-size: 1.2rem;
      }
    }
    svg {
      font-size: 30px;
      color: var(--dark-3);
    }
  }
  .bar {
    position: relative;
    padding: 0 1.4rem;
    .after {
      position: absolute;
      top: -1%;
      min-width: 1.4rem;
      min-height: 1.4rem;
      right: 40%;
      border-radius: 20px;
      border: 2px solid var(--primary);
      background-color: var(--dark-1);
      font-size: 1rem;
      font-weight: 700;
    }
    svg {
      font-size: 30px;
      color: var(--dark-3);
    }
  }
`;
