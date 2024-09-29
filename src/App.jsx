import React from 'react'
import {HashRouter} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Settings from './pages/Settings'


const App = () => {
  return (
    <HashRouter>
       <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path="about" exact element={<About/>}/>
          <Route path="settings" exact element={<Settings/>}/>
       </Routes>
       

    </HashRouter>
  )
}

export default App
