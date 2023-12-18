import { useEffect, useState } from 'react'

function useFetch(url, method="GET") {
    const [apiResponse, setApiResponse] = useState({
        data: [],
        error: '',
        isLoading: false
    })
    const [option, setOption] = useState(null)

    console.log(apiResponse , option, 'test')

    const optionData = (data) => {
        if (method === 'POST') {
            setOption({
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
        } else if (method === 'PATCH') {
            setOption({
                method: 'PATCH',
                body: JSON.stringify(data),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
              })
        } else if (method === 'DELETE') {
            setOption({
                method: 'DELETE',
              })
        }
    }

    useEffect(() => {
        setApiResponse(prev => ({
            ...prev,
            isLoading: true
        }))
        const getData = async (option) => {
            const response = await fetch(url, {...option})
            const jsonResponse = await response.json()
    
            if (response.ok) {
                setApiResponse(prev => ({
                    ...prev,
                    data: jsonResponse,
                    isLoading: false
                }))
            } else {
                setApiResponse(prev => ({
                    ...prev,
                    error: response.error,
                    isLoading: false
                }))
            }
        }

        if (method === 'GET') {
            getData()
        }

        if ((method === 'POST' || method === 'PATCH' || method === 'DELETE') && option) {
            getData(option)
        }

    }, [url, method, option])

    return {apiResponse, optionData}
}

export default useFetch