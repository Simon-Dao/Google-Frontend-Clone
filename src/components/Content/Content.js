import React, { useEffect, useState } from 'react'
import axios from 'axios'
import tempData from './tempdata'
import './Content.css'

export default function Content({searchData}) {

  let {question, setQuestion} = searchData 

  const [links, setLinks] = useState([])

  useEffect( async () => {
    
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
    
    console.log(question)

    let result = /*tempData*/await axios.request(options)
    if(!result.data.results) throw new Error('Could not fetch results!') 

    let usefulData = result.data.results
    
    if( usefulData != [] && JSON.stringify(usefulData) !== JSON.stringify(links)) setLinks(usefulData)
    
  })

  return (
    <div className='d-flex result-container' style={{flexWrap:'wrap'}}>
      {
        links.map((result, index) => {
          return (
            <div key={index} className='card card-custom'>
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
