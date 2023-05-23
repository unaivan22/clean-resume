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
import VersionNine from './v9/VersionNine'
import VersionTen from './v10/VersionTen'
import VersionEleven from './v11/VersionEleven'
import VersionTwelve from './v12/VersionTwelve'
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
            <Route path='/v9' element={<VersionNine/>} />
            <Route path='/v10' element={<VersionTen/>} />
            <Route path='/v11' element={<VersionEleven/>} />
            <Route path='/v12' element={<VersionTwelve/>} />
            <Route path='/templates' element={<AllTemplates/>} />

        </Routes>
     </Router>
  )
}