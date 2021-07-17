import React from 'react'
import { drizzleReactHooks } from '@drizzle/react-plugin'
import { newContextComponents } from '@drizzle/react-components'


const { useDrizzle, useDrizzleState } = drizzleReactHooks
const {ContractData, ContractForm} = newContextComponents

export default function Orders() {
    
    const { drizzle } = useDrizzle()
    const state = useDrizzleState(state => state)

    const styleForm = {
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        width: '500px'
    }

    return (
        <div>
            <ContractData
               drizzle={drizzle}
               drizzleState={state}
               contract="BuyCars"
               method="viewOrderList"
            />

            <ContractForm style={styleForm}
              drizzle={drizzle}
              contract="BuyCars"
              method="createOrder"
            />
            
        </div>
    )
}
