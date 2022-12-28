import React from 'react'
import { AccountContext } from './account-context'

const contextValue = {}

const Account = () => {
  return <AccountContext.Provider value={contextValue}>
    <div className='account-page'>
      Coming soon..
    </div>
  </AccountContext.Provider>
}

export default Account