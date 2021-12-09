import { useState, useEffect } from 'react'
import {
    Form,
    Button
} from "react-bootstrap";
import axios from 'axios'
import {useNavigate, Navigate} from 'react-router-dom'
// import {stockData} from "../data/stockData"
import TradingChart from "../components/TradingChart"




export default function LogInForm(props) {
    let navigate = useNavigate()
    const [data, setData] = useState({})
    const handleChange = (e) => setData(prevState => ({
        ...prevState,
        [e.target.id]: e.target.value
    }))
  let emailAddress = "emailAddress"
  let password = "password"

    const logInAPI_URL = "https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/auth/login"
    const logInUser = (e) => {
        e.preventDefault();
        console.log("apicall")
        console.log(data)
        axios.post(logInAPI_URL, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
            client_secret: "mYebcUwE5S4FNff4pjK39vx3FtxCmZXz2Hy7XJHZ",
            client_id: "94ba363d-e0ab-4649-86ce-4a4392cc00ad",
            grant_type: "password",
            password: data.password,
            username: data.emailAddress,
            email: data.emailAddress,
            scope: ""


        })
            .then(function (response) {
                props.setToken(response.data.data.token)
                localStorage.setItem("userToken", response.data.data.token)
                navigate("/home")
                console.log(response);
            })
            .catch(function (error) {
                console.log(error)
            })
        //console.log(response)
    }

    return (
        <div>

        <TradingChart/>
        <Form onSubmit={logInUser}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    id={emailAddress}
                    onChange={handleChange}
                    type="email"
                    placeholder="Enter email"
                    value={data.emailAddress || ""}
                    />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
    </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    id={password}
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={data.password || ""} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
            </Form.Group>
            <Button
                variant="primary"
                type="submit"
                >
                Submit
  </Button>
        </Form>
                </div>
    )
}
