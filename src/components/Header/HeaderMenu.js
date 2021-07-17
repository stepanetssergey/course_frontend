import React from 'react'
import styled from 'styled-components'

export default function HeaderMenu() {
    return (
        <MenuContainer>
            <MenuItem>Cars</MenuItem>
            <MenuItem>Users</MenuItem>
            <MenuItem>Orders</MenuItem>
            <MenuItem>Service Orders</MenuItem>
        </MenuContainer>
    )
}


const MenuContainer = styled.div`
  display:grid;
  justify-content: space-around;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`

const MenuItem = styled.div`
 
`
