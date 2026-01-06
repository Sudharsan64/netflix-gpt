import React from 'react'
import { Body } from './component/Body'
import Browser from './component/Browser'
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
const App = () => {
  
  return (
    <Provider store={appStore}>
        <Body />
    </Provider>
  )
}; 

export default App