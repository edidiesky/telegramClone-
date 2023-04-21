import React, { useState } from "react";
import styled from "styled-components";

const chatData = [
  {
    id: 1,
    image: "images/boris-khentov.jpg",
    name: "boris-khentov",
    text: "Hi, how are you",
  },
  {
    id: 2,
    image: "images/johanna-richardson.jpg",
    name: "johanna richardson",
    text: "Hi, how are you",
  },
  {
    id: 3,
    image: "images/john-mileham.jpg",
    name: "john mileham",
    text: "Hi, how are you",
  },
  {
    id: 4,
    image: "images/jon-mauney.jpg",
    name: "jon-mauney",
    text: "Hi, how are you",
  },
  {
    id: 5,
    image: "images/kim-rosenblum.jpg",
    name: "kim-rosenblum",
    text: "Hi, how are you",
  },
  {
    id: 6,
    image: "images/kumud-sharma-1.jpg",
    name: "kumud-sharma-1",
    text: "Hi, how are you",
  },
  {
    id: 7,
    image: "images/mike-reust.jpg",
    name: "mike-reust",
    text: "Hi, how are you",
  },
  {
    id: 8,
    image: "images/peter-lorimer.jpg",
    name: "peter-lorimer",
    text: "Hi, how are you",
  },
  {
    id: 9,
    image: "images/raoul-bhavnani.jpg",
    name: "raoul-bhavnani",
    text: "Hi, how are you",
  },
  {
    id: 10,
    image: "images/sandy-lavipour.jpg",
    name: "sandy-lavipour",
    text: "Hi, how are you",
  },
];

export default function ChatList() {
  const [tab, setTab] = useState(0);
  return (
    <ChatListContainer>
      <div className="w-100 flex column chatlistWrapper">
        {chatData.map((x) => {
          return (
            <div
              onClick={() => setTab(x.id)}
              className={
                tab === x.id
                  ? "w-100 listCard flex item-center justify-space gap-2 active"
                  : "w-100 listCard flex item-center justify-space gap-2"
              }
              key={x.id}
            >
              <div className="cardRight flex item-start gap-2">
                <img src={x.image} alt="" className="avatar" />
                <h5 className={"fs-12 flex family1 column gap-1 text-light text-white"}>
                  {x.name}
                  <div className="span block text-grey">{x.text}</div>
                </h5>
              </div>
              <div className="flex rightEnd item-end family1 cardleft column gap-1 text-light justify-space text-grey fs-12">
                <span>10/36/3733</span>
                <span className='notification flex item-center justify-center'>10</span>
              </div>
            </div>
          );
        })}
      </div>
    </ChatListContainer>
  );
}
const ChatListContainer = styled.div`
.notification {
  padding: .2rem 1rem;
  border-radius:10px;
  background:var(--dark-1);
  font-size:10px;
  display: block;
  font-weight:700;
  color:#fff;
}
  .chatlistWrapper {
    .listCard {
      padding: 1.5rem 2rem;
      @media (max-width:1080px) {
        padding: 1.2rem 1.6rem;
        flex-direction: column;
        align-items: flex-start;
      }
      .cardRight {}
      .cardleft {
        display: flex;
        align-items: flex-end;
      }
      &.active {
        background-color: var(--dark-1);
        .cardRight {
          .span {
            color: #fff;
          }
        }
        .cardleft {
          color: #fff;
        }
      }
    }
  }
`;
