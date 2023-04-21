import React from "react";
import styled from "styled-components";

const converstionData = [
  {
    id: 1,
    senderMessage: ["Hi Dear", "How was your day"],
    recieverMessage: ["I am fine", "How was the wekend"],
  },
  {
    id: 1,
    senderMessage: ["Hi Dear", "How was your day"],
    recieverMessage: ["I am fine", "How was the wekend"],
  },
  {
    id: 1,
    senderMessage: ["Hi Dear", "How was your day"],
    recieverMessage: ["I am fine", "How was the wekend"],
  },
  {
    id: 1,
    senderMessage: ["Hi Dear", "How was your day"],
    recieverMessage: ["I am fine", "How was the wekend"],
  },
  {
    id: 1,
    senderMessage: ["Hi Dear", "How was your day"],
    recieverMessage: ["I am fine", "How was the wekend"],
  },
  {
    id: 1,
    senderMessage: ["Hi Dear", "How was your day"],
    recieverMessage: ["I am fine", "How was the wekend"],
  },
];

export default function Chats() {
  return (
    <ChatContainer>
      <div className="w-90 auto column flex gap-2">
        {converstionData.map((x) => {
          return (
            <div className="flex ">
              <div className="chatCard flex w-100 item-start column gap-1">
                {x.senderMessage.map((x) => {
                  return (
                    <div className="SenderChat flex item-center justify-space shadow family1 text-light">
                      {x} <div className="date fs-10 text-grey">11/12/2023</div>
                    </div>
                  );
                })}
                {x.recieverMessage.map((x) => {
                  return (
                    <div className="recieverChat flex item-center justify-space shadow family1 text-light">
                      {x} <div className="date fs-10 text-grey">11/12/2023</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </ChatContainer>
  );
}
const ChatContainer = styled.div`
  width: auto;
  overflow: hidden;
  height: 100%;
  background-color: var(--primary);
  max-height: 70vh;
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
  .chatCard {
    display: flex;
    align-items: flex-start;
  }
  .SenderChat {
    padding: 1rem 2rem;
    position: relative;
    font-size: 1.2rem;
    color: #fff;
    border-radius: 15px;
    font-weight: 400;
    gap: 1.2rem;
    background-color: var(--dark-3);
    &::after {
      position: absolute;
      right: 0%;
      width: 2rem;
      height: 2rem;
      content: "";
      bottom: 0%;
      background-color: var(--dark-3);
      transform: rotate(90deg);
    }
  }
  .recieverChat {
    padding: 1rem 2rem;
    justify-content: flex-end;
    gap: 1.2rem;
    align-self: flex-end;
    position: relative;
    font-size: 1.2rem;
    color: #fff;
    border-radius: 15px;
    font-weight: 400;
    background-color: var(--dark-1);
    &::after {
      position: absolute;
      left: -0%;
      width: 2rem;
      height: 2rem;
      content: "";
      bottom: 0%;
      background-color: var(--dark-1);
      transform: rotate(90deg);
    }
  }
`;

// rgb(63, 86, 140)
