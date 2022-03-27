import React, { useEffect, useState } from 'react'
import axios from 'axios'
import tempData from './tempdata'
import './Content.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import All from '../All/All'
import Images from '../Images/Images'
import News from '../News/News'
import Videos from '../Videos/Videos'

export default function Content({searchData}) {
  return (
    <div style={{padding:'20px'}}>
      <Router >
        <Routes>
          <Route path="/all" element={<All searchData={searchData}/>} />
          <Route path="/images" element={<Images searchData={searchData}/>} />
          <Route path="/videos" element={<Videos searchData={searchData}/>} />
          <Route path="/news" element={<News searchData={searchData}/>} />
        </Routes>
      </Router>
    </div>
  )
}
