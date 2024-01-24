import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../components/HomePage'
import TodoDatailis from '../components/TodoDatailis'

const MainRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/datail/:id' element={<TodoDatailis />} />
    </Routes>
  )
}

export default MainRouter
