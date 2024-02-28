import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/header'
import Banner from './components/banner/banner'
import Catalog from './components/catalog/catalog'
import CartPage from './components/cartPage/cartPage'




function App(props) {
  return (
    <div className="wrapper">
      <Header />
      <Routes>
        <Route path='/' element={<Banner />}/>
        <Route path='/catalog' element={<Catalog store={props.store} />}/>
        <Route path='/catalog/:id' element={<CartPage/>}/>
        <Route path='/' element={<Banner />}/>
      </Routes>
      <Header />
    </div>
  )
}

export default App
