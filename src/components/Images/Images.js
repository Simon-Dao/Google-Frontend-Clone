import React from 'react'
import axios from 'axios'
import tempData from './imagedata'
import '../Content/Content.css'
import './Images.css'
import { useEffect, useState } from 'react'
import fetchData from '../../utils/fetchData'

export default function Images({searchData}) {

  let {question, setQuestion} = searchData 
  
  const [images, setImages] = useState([])

  useEffect(() => {
    
    
    async function fetch() {
          
      var options = {
      method: 'GET',
      url: 'https://google-search3.p.rapidapi.com/api/v1/image/q='+question,
      headers: {
        'X-User-Agent': 'desktop',
        'X-Proxy-Location': 'EU',
        'X-RapidAPI-Host': 'google-search3.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY
      }
      }

      fetchData(options, images, setImages)
    }

    fetch() 
  })

  return (
    <div className='d-flex result-container' style={{flexWrap:'wrap'}}>
      {
        images.map((result, index) => {

          return (
            <div className='card-custom d-flex'>
              <a href={result.link.href}>
                <img className="image" src={result.image.src} alt={result.image.alt} />
              </a>

              <div className='text'>{result.link.title}</div>
            </div>
          )
          })
      }
    </div>
  )
}
