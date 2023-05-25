import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './component'
import { SuperItem, SuperList, Home, Search } from './component/pages'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='list'>
          <Route index element={<SuperList />} />
          <Route path=':id' element={<SuperItem />} />
        </Route>
        <Route path='/search' element={<Search />} />
      </Route>
    </Routes>
  )
}

export default App
