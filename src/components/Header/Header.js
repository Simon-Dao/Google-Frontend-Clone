import { Typography } from '@mui/material'
import React, {useState} from 'react'
import './Header.css'
import Option from '../Options/Option'
import {light} from '../../Style/themes'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import All from '../All/All'
import Images from '../Images/Images'

export default function Header({searchData}) {

  let {question, setQuestion} = searchData 

  const [searchText, setSearchText] = useState('') 

  const theme = light

  const navBarCustom =  {backgroundColor:theme.primary}
  
  const letters = [
    ['S','#4286f5'],
    ['M','#ea4235'],
    ['O','#fabc05'],
    ['G','#4285f6'],
    ['L','#34a853'],
    ['E','#e94335']
  ]

  const onSubmit = (e) => {
    e.preventDefault()
    setQuestion(searchText)    
  }

  const onChange = (e) => {
    //setQuestion(e.target.value)
    setSearchText(e.target.value)
  }

  return (
    <>
    <nav className="navbar navbar-custom" style={navBarCustom}>
        <div className="" style={{display:'flex', alignItems: 'center'}}>

            <div className='logo' style={{marginRight:'10vw', position:'relative', bottom:'5px'}}>
              {
                letters.map((letter) => {
                  return (
                    <span key={letter[1] + letter[0]} style={{color:letter[1]}}>{letter[0]}</span>
                  )
                })
              }
              {/* Simon's Mega Optimised General Language Engine */}
            </div>
            <form onSubmit={(e)=> onSubmit(e)} className="d-flex">
              <input className="form-control me-2 search-bar" type="search" placeholder="Search" aria-label="Search" onChange={onChange}/>
              <button className="btn btn-primary search-button" type="submit">Search</button>
            </form>

            <button className='btn theme-button btn-dark'>
              <div>Dark</div>
            </button>
        </div>
    </nav>

      <nav className="navbar navbar-custom shadow-custom" style={navBarCustom}>
        <div style={{marginLeft:'50px'}} className="btn-group" role="group" aria-label="Basic example">

            <Option type='All'/>
            <Option type='Images'/>
            <Option type='Videos'/>
            <Option type='News'/>

        </div>
      </nav>
    </>
  )
}
