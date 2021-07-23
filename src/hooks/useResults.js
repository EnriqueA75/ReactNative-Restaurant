import React, { useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            })
            setResults(response.data.businesses)
        } catch (error) {
            setErrorMessage('Something Went Wrong')

            setTimeout(() => {
               setErrorMessage('') 
            }, 5000);
        }
    }
    //call the seaarchAPI when component render
    useEffect(() => {
        searchApi('beef')
    }, [])

    return [
        searchApi,
        results,
        errorMessage
    ]
}