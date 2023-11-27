// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'


const useProperties = () => {
    const [properties, setProperties] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('http://localhost:5000/properties')
        .then(res => res.json())
        .then((data)=>{
            setProperties(data)
            setLoading(false)
        })
    }, [])
  return [properties, loading]
}

export default useProperties
