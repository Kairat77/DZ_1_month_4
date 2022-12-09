import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function List(props){
  return(
    <li>{props.name}</li>
    
  )
}
function Header() {
  return(
    < >
    <span> Fruts</span>
    </>
  )
}

function App() {
  return (
    <div className="App">
      <span>choose</span>
      <Header/>
      <ul>
        <List name="apple"/>
        <List name="pear" />
        <List name="mandarin"/>
        <List name="lemon"/>
        <List name="orange"/>
      </ul>
    </div>
  )
}

export default App
