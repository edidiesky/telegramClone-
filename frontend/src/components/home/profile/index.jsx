import React from "react";
import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import { IoNotificationsOutline } from "react-icons/io5";
import { RiErrorWarningLine, RiShareForwardLine } from "react-icons/ri";
import { BsCameraVideo, BsToggle2On } from "react-icons/bs";
import { HiOutlinePhoto } from "react-icons/hi2";
import { MdDelete, MdEdit, MdKeyboardVoice } from "react-icons/md";

export default function ProfileIndex() {
  return (
    <ProfileContainer className="w-100 flex column py-2">
      <div className="w-10 flex column gap-2">
        <div className="w-85 auto flex column gap-3">
          <div className="w-100 flex item-center justify-space">
            <h4 className="fs-14 text-light family1 text-white">User Info</h4>
            <RxCross1 className="fs-20 icon" />
          </div>

          <div className="w-100 flex item-center gap-2">
            <img src="images/mike-reust.jpg" alt="" className="avatar-large" />
            <div className="flex column gap-2">
              <h4 className="fs-18 text-white">
                *
                <span className="block fs-16 text-grey text-light">
                  Last seen today at 7:78pm
                </span>
              </h4>
            </div>
          </div>
        </div>
        <div className="borderB"></div>
        {/* biodata */}
        <div className="w-85 auto flex gap-3">
          <div className="">
            <RiErrorWarningLine className="fs-20 text-white" />
          </div>
          {/* bio data */}
          <div className="w-100 flex column gap-2">
            {/* mobile */}
            <h4 className="fs-14 text-white text-light">
              +234 456 4464 464
              <div className="text-grey block">Mobile</div>
            </h4>
            {/* bio */}
            <h4 className="fs-14 w-90 text-white text-light">
              Desire Becomes surrender, surrender become power
              <div className="text-grey block">Bio</div>
            </h4>
            {/* username */}
            <h4 className="fs-14 w-90 text-blue text-light">
              @TheEvi
              <div className="text-grey block">Username</div>
            </h4>
          </div>
          {/* notification */}
        </div>
        {/* not */}
        <div className="w-85 auto  flex item-center justify-space gap-3">
          <div className="flex item-center gap-2 fs-14 text-grey text-light">
            <IoNotificationsOutline className="fs-20 text-white" />
            Notifications
          </div>
          <BsToggle2On className="fs-26 text-blue" />
        </div>

        <div className="borderB"></div>

        <div className="w-85 auto flex column gap-3">
          <div className="w-100 flex item-center justify-space">
            <div className="flex item-center gap-2 fs-14 text-grey text-light">
              <HiOutlinePhoto className="fs-20 text-white" />
              Notifications
            </div>
          </div>
          {/* videos */}
          <div className="flex item-center gap-2 fs-14 text-grey text-light">
            <BsCameraVideo className="fs-20 text-white" />4 Videos
          </div>

          {/* voice message */}
          <div className="flex item-center gap-2 fs-14 text-grey text-light">
            <MdKeyboardVoice className="fs-20 text-white" />
            16 voice messages
          </div>
        </div>
        <div className="borderB"></div>

        <div className="w-85 auto flex column gap-3">
          <div className="w-100 flex item-center justify-space">
            <div className="flex item-center gap-2 fs-14 text-grey text-light">
              <RiShareForwardLine className="fs-20 text-white" />
              Share this contact
            </div>
          </div>
          {/* videos */}
          <div className="flex item-center gap-2 fs-14 text-grey text-light">
            <MdEdit className="fs-20 text-white" />Edit Contact
          </div>
           {/* videos */}
           <div className="flex item-center gap-2 fs-14 text-grey text-light">
            <MdDelete className="fs-20 text-white" />Delete Contact
          </div>
        </div>
      </div>
    </ProfileContainer>
  );
}
const ProfileContainer = styled.div`
  width: auto;
  overflow: hidden;
  height: 100%;
  max-height: 100vh;
  overflow: auto;
  background-color: var(--dark-4);
  &::-webkit-scrollbar {
    width: 7px;
    height: 7px;
    background: #e8e6e6;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--grey-1);
    border-radius: 10px;
    transition: all 0.5s;
    &:hover {
      background: #333;
    }
  }
  @media (max-width: 580px) {
    display: none;
  }
  .icon {
    color: var(--dark-1);
  }
`;
