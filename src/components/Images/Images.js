import React from 'react'
import axios from 'axios'
import tempData from './imagedata'
import '../Content/Content.css'
import './Images.css'
import { useEffect, useState } from 'react'

export default function Images({searchData}) {

  let {question, setQuestion} = searchData 
  
  const [images, setImages] = useState([])

  useEffect( async () => {
        
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
    
  
  let result = tempData//await axios.request(options)
  console.log(result)
  if(!result.data.results) throw new Error('Could not fetch results!') 

    let usefulData = result.data.image_results
    
    if( usefulData != [] && JSON.stringify(usefulData) !== JSON.stringify(images)) setImages(usefulData)
    
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
