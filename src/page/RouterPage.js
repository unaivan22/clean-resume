import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './Home'
import VersionOne from './v1/VersionOne'
import VersionTwo from './v2/VersionTwo'
import VersionThree from './v3/VersionThree'
import VersionFour from './v4/VersionFour'
import VersionFive from './v5/VersionFive'
import VersionSix from './v6/VersionSix'
import VersionSeven from './v7/VersionSeven'
import VersionEight from './v8/VersionEight'
import AllTemplates from './AllTemplates'

export default function RouterPage() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/v1' element={<VersionOne/>} />
            <Route path='/v2' element={<VersionTwo/>} />
            <Route path='/v3' element={<VersionThree/>} />
            <Route path='/v4' element={<VersionFour/>} />
            <Route path='/v5' element={<VersionFive/>} />
            <Route path='/v6' element={<VersionSix/>} />
            <Route path='/v7' element={<VersionSeven/>} />
            <Route path='/v8' element={<VersionEight/>} />
            <Route path='/templates' element={<AllTemplates/>} />

        </Routes>
     </Router>
  )
}