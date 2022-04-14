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
import Header from '../Header/Header';


export default function Content({searchData}) {
  const [searchText, setSearchText] = useState('') 

  useEffect(()=> {
    setSearchText(localStorage.getItem('searchText'))
  },[])

  return (
    <div style={{}}>
      <Router >
        <Routes>
          <Route path="/" element={<> <Header state={{searchText, setSearchText}} searchData={searchData}/> <All searchData={searchData}/></>} />
          <Route path="/all" element={<> <Header state={{searchText, setSearchText}} searchData={searchData}/> <All searchData={searchData}/></>} />
          <Route path="/images" element={<> <Header state={{searchText, setSearchText}} searchData={searchData}/> <Images searchData={searchData}/></>} />
          <Route path="/videos" element={<><Header state={{searchText, setSearchText}} searchData={searchData}/> <Videos searchData={searchData}/></>} />
          <Route path="/news" element={<>  <Header state={{searchText, setSearchText}} searchData={searchData}/> <News searchData={searchData}/></>} />
        </Routes>
      </Router>
    </div>
  )
}
