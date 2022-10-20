import React from 'react'
import "./Styles/App.scss"
import {ApiProvider} from "@reduxjs/toolkit/query/react"
import {newsSlice} from "./features/api/newsSlice"
import Home from './Home'

const App = () => {
  return (
    <ApiProvider api={newsSlice}>
      <Home/>
    </ApiProvider>
  )
}

export default App