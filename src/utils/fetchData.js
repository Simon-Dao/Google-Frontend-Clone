import axios from 'axios'
import tempdata from '../components/Content/tempdata'
import imageData from '../components/Images/imagedata'
const useAPI = true

export async function fetchData(options, stateVar, stateSetter) {

  //maybe put animation here????? idk

  let result = useAPI ? await axios.request(options) : tempdata

  console.log('fetching data')

  if(!result.data.results) throw new Error('Could not fetch results!') 

  let usefulData = result.data.results

  if( usefulData !== [] && JSON.stringify(usefulData) !== JSON.stringify(stateVar)) stateSetter(usefulData)
}

export async function fetchImages(options, stateVar, stateSetter) {
  let result = useAPI ? await axios.request(options) : imageData

  console.log(result)
  console.log('fetching images')

  if(!result.data.results) throw new Error('Could not fetch results!') 

  let usefulData = result.data.image_results

  if( usefulData !== [] && JSON.stringify(usefulData) !== JSON.stringify(stateVar)) stateSetter(usefulData)
}