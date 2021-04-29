import React, { useState, useEffect } from 'react'

function useApi(fetchData) {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const mutate = async (value) => {
    setIsLoading(true)
    try {
      const result = await fetchData(value)
      console.log(result)
      setData(result)
    } catch (error) {
      setError(error)
    }
  }
 
  return [ data, isLoading, mutate, error ]
}

export { useApi }
