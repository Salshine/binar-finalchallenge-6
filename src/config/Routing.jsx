import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Detail from '../pages/detail/Detail'
import Catalog from '../pages/Catalog'

const Routing = () => {
  return (
    <Routes>
        <Route 
        path='/:category/search/:keyword' 
        Component={Catalog} 
        />
        <Route 
        path='/:category/:id' 
        Component={Detail} 
        />
        <Route 
        path='/:category' 
        Component={Catalog} 
        />
        <Route 
        path='/' 
        exact
        Component={Home} 
        />
    </Routes>
  )
}

export default Routing