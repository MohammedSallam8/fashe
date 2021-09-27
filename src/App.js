import React from 'react'
import Home from './Layout/Home'
import Shop from './Layout/Shop'
import {BrowserRouter , Route} from 'react-router-dom'

export default function App() {
  return(
    <div className="App">
      <BrowserRouter>
      <Route exact path="/" component= {Home} />
      <Route path="/Shop" component= {Shop} />
    </BrowserRouter>
    </div>
  )
}
