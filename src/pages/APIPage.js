import React, {useEffect, useState } from 'react'
import axios from 'axios'
import { Spinner } from 'react-bootstrap'
import { chartMapper } from "../utilities/chartHelper"
import { axiosHelper } from "../utilities/axiosHelper"


export default function APIPage() {
    const [APIData, setAPIData] = useState([])
    const [submit, setSubmit] = useState(false)
    useEffect(
        () => axiosHelper({
            url: "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SPX&outputsize=full&apikey=EADD7VFG8GG0ABQY",
            method:"get",
            successMethod: setAPIData
        }), [])

        useEffect(() => axiosHelper({
                url: "https://json[;aceholder.typicode.com/todos/post",
                method:"post",
                data: {user_id: 1, title: 'dummy text here'}
            }), [submit])

    const AlphaVantageKey = "EADD7VFG8GG0ABQY"
    
    return (
        <div>
            {
                APIData
                ? chartMapper(APIData)
                : <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }
        </div>


    )
    

}import React, {useEffect, useState } from 'react'
import axios from 'axios'
import { Spinner } from 'react-bootstrap'
import { chartMapper } from "../utilities/chartHelper"
import { axiosHelper } from "../utilities/axiosHelper"


export default function APIPage() {
    const [APIData, setAPIData] = useState([])
    const [submit, setSubmit] = useState(false)
    useEffect(
        () => axiosHelper({
            url: "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SPX&outputsize=full&apikey=EADD7VFG8GG0ABQY",
            method:"get",
            successMethod: setAPIData
        }), [])

        useEffect(() => axiosHelper({
                url: "https://json[;aceholder.typicode.com/todos/post",
                method:"post",
                data: {user_id: 1, title: 'dummy text here'}
            }), [submit])

    const AlphaVantageKey = "EADD7VFG8GG0ABQY"
    
    return (
        <div>
            {
                APIData
                ? chartMapper(APIData)
                : <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            }
        </div>


    )
    

}