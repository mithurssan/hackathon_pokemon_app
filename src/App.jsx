import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components'
import { PokemonItem, PokemonList, Home, Search } from './pages'
import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path='list'>
          <Route index element={<PokemonList />} />
          <Route path=':id' element={<PokemonItem />} />
        </Route>
        <Route path='/search' element={<Search />} />
      </Route>
    </Routes>
  )
}

export default App
