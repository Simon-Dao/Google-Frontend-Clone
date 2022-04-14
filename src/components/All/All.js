import React from 'react'
import axios from 'axios'
import tempData from '../Content/tempdata'
import '../Content/Content.css'
import { useEffect, useState } from 'react'
import fetchData from '../../utils/fetchData'

export default function All({searchData}) {

  let {question, setQuestion} = searchData 

  const [links, setLinks] = useState([])

  useEffect(() => {
    
    
    async function fetch() {
      var options = {
        method: 'GET',
        url: 'https://google-search3.p.rapidapi.com/api/v1/search/q='+question,
        headers: {
          'X-User-Agent': 'desktop',
          'X-Proxy-Location': 'EU',
          'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
        }
      };

      fetchData(options, links, setLinks)
    }

    fetch() 
  })

  return (
    <div className='result-container' style={{flexWrap:'wrap'}}>
      {
        links.map((result, index) => {
          return (
            <div key={index} className='card-custom'>
              <div className='card-body card-body-custom'>
                <a href={result.link} className='card-title card-title-custom'>
                  {result.title}
                </a>
                <div className='card-text card-text-custom'>
                  {result.link}
                </div>
              </div>
            </div>
          )
          })
      }
    </div>
  )
}
