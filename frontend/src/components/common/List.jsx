import React from 'react'
import styled from 'styled-components'

export default function List() {
  return (
    <ListContent>List</ListContent>
  )
}

const ListContent = styled.div`
    width: auto;
    height:100vh;
    position: sticky;
    top: 0;
    background-color: var(--dark-4);
    color: #fff;
    max-height: 50rem;
    overflow: auto;
`