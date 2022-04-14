import React from 'react'
import axios from 'axios'
import '../Content/Content.css'
import { useEffect, useState } from 'react'
import tempData from './data'
import {fetchData} from '../../utils/fetchData'

export default function Videos({searchData}) {

  let {question, setQuestion} = searchData 
  
  const [videos, setVideos] = useState([])

  useEffect(() => {
        
    async function fetch() {
      var options = {
        method: 'GET',
        url: 'https://google-search3.p.rapidapi.com/api/v1/video/q='+question,
        headers: {
          'X-User-Agent': 'desktop',
          'X-Proxy-Location': 'EU',
          'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
          'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
        }
      };

      fetchData(options, videos, setVideos)
    }

    fetch() 
  })

  return (
    <div className='d-flex result-container' style={{flexWrap:'wrap'}}>
      {
        videos.map((result, index) => {

          return (
            <div className='card-custom d-flex'>
              <a href={result.cite.domain}>
                {result.cite.domain}
              </a>
            </div>
          )
          })
      }
    </div>
  )
}
