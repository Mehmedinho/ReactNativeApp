import {useEffect, useState} from 'react'
import yelp from '../api/yelp'

export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  // Wait for some response to come back 
  const searchApi = async (searchTerm) => {
      console.log('Hi there')
      try {
     const response = await yelp.get('/search', {
         params: {
              limit: 50,
              term: searchTerm,
              location: 'Stockholm'
         }
      })
      setResults(response.data.businesses)
     } catch (err) {
        setErrorMessage('Something went wrong')
     }
  }

  // Call searchApi when component
  // is first rendered
//   searchApi('pasta')

    useEffect(() => {
        searchApi('pasta ')
    }, [])

    return [searchApi, results, errorMessage ]
}
