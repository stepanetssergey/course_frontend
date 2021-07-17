import React, {useState} from 'react'
import { Drizzle } from '@drizzle/store'
import { drizzleReactHooks } from '@drizzle/react-plugin'
import drizzleOptions from './store/DrizzleOptions'
import Loading from './components/loading/Loading'
import CarsList from './components/Cars/CarsList'
import UsersList from './components/Users/UsersList'
import OrdersList from './components/Orders/OrdersList'
import ServiceOrdersList from './components/ServiceOrders/ServiceOrdersList'
import styled from 'styled-components'
import './index.css'


const drizzle = new Drizzle(drizzleOptions)
const { DrizzleProvider } = drizzleReactHooks;

function App() {
  
  const [page, setPage] = useState({cars:true, users:false, orders:false, serviceOrder:false})
  
  const hendlMenu = (e) => {
    const emptyMenu = {cars:false, users:false, orders:false, serviceOrder:false}
    const currentMenuState = {...emptyMenu, [e.currentTarget.id]:true}
    setPage(currentMenuState)
  }
   
  return (
    <DrizzleProvider drizzle={drizzle}>
     <Loading>
       <header>
       <MenuContainer>
            <MenuItem id="cars" onClick={hendlMenu}>Cars</MenuItem>
            <MenuItem id="users" onClick={hendlMenu}>Users</MenuItem>
            <MenuItem id="orders" onClick={hendlMenu}>Orders</MenuItem>
            <MenuItem id="serviceOrder" onClick={hendlMenu}>Service Orders</MenuItem>
        </MenuContainer>
       </header>
       <InputFormContainer>
         {page.cars && <CarsList/>}
         {page.users && <UsersList />}
         {page.orders && <OrdersList/>}
         {page.serviceOrder && <ServiceOrdersList/>}
       </InputFormContainer>
       <footer>

       </footer>
     </Loading>
    </DrizzleProvider>
  );
}

export default App;


const InputFormContainer = styled.main`
   display:grid;
   grid-template-rows: 100%;
   justify-content:center;
   align-items:center;
`

const MenuContainer = styled.div`
  display:grid;
  justify-content: space-around;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 4rem;
  align-items: center;
  background-color: black;

`

const MenuItem = styled.div`
 text-align:center;
 color:white;
 cursor:pointer;
`