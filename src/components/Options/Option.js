import React from 'react'
import '../Header/Header.css'
import './Option.css'

export default function Option({type}) {
  return (
    <button type="button" className="btn btn-link option-button">
      <a href={"/"+type}>{type}</a>
    </button>
  )
}
