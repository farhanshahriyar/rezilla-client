// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'


const useProperties = () => {
    const [properties, setProperties] = useState([])
    const [loading, setLoading] = useState(true)
    const [range, setRange] = useState([0, 0])
    const [max, setMax] = useState(0)
    const [min, setMin] = useState(0)
    const [properties2, setProperties2] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/all-properties')
        .then(res => res.json())
        .then((data)=>{
            console.log(data)
            const max = Math.max(...data.map(item => item.price))
            setRange([0, max])
            setMax(max)
            setProperties(data)
            setProperties2(data)
            setLoading(false)
        })
    }, [])
  return [properties, loading, max, setMax, min, setMin, range, setRange, setProperties, properties2]
}

export default useProperties
