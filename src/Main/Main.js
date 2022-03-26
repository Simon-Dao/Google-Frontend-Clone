import React,{useState} from 'react'
import './Main.css'
import Header from '../components/Header/Header'
import Content from '../components/Content/Content'
import { Container } from '@mui/material'

function Main() {

  const [question, _setQuestion] = useState('Elon+Musk')

  const setQuestion = (newQuestion) => {
    _setQuestion(newQuestion.replace(" ", "+"))
  }
  
  return (
    <>
      <Header searchData={{question, setQuestion}}/>
      <Content searchData={{question, setQuestion}}/>
    </>
  )
}

export default Main