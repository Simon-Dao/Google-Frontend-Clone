import axios from 'axios'
import tempdata from '../components/Content/tempdata'

export default async function fetchData(options, stateVar, stateSetter) {
      
  let result = tempdata//await axios.request(options)
  
  if(!result.data.results) throw new Error('Could not fetch results!') 

  let usefulData = result.data.results

  if( usefulData !== [] && JSON.stringify(usefulData) !== JSON.stringify(stateVar)) stateSetter(usefulData)
    return result.data.results
}