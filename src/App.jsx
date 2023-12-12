import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './views/Home'
import Pokemon from './views/Pokemon'
import PokemonDetail from './views/PokemonDetail'

function App() {

  return (
    <>
    
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/pokemon" element={<Pokemon/>}></Route>
          <Route path="/pokemon/:name" element={<PokemonDetail/>}></Route>
        </Routes>
        
  
    </>
  )
}

export default App
