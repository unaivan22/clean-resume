import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Home'
import VersionOne from './v1/VersionOne'
import VersionTwo from './v2/VersionTwo'

export default function RouterPage() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/v1' element={<VersionOne/>} />
            <Route path='/v2' element={<VersionTwo/>} />
        </Routes>
     </Router>
  )
}