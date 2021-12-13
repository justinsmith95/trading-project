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

    const logInAPI_URL = "https://Backend-Laravel-jtsmith956297578.codeanyapp.com/oauth/token"
    const logInUser = (e) => {
        e.preventDefault();
        console.log("apicall")
        console.log(data)
        axios.post(logInAPI_URL, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-type',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Credentials': true,

        },
            client_secret: "azUdWDryXb9htqx2grGDdusL1nxkDyeiKeGtYKAJ",
            client_id: "4",
            grant_type: "password",
            password: data.password,
            username: data.emailAddress,
            email: data.emailAddress,
            scope: ""


        })
            .then(function (response) {
                console.log(response);
                props.setToken(response.data.access_token)
                localStorage.setItem("userToken", response.data.access_token)
                navigate("/dashboard")
            })
            .catch(function (error) {
                console.log(error)

            })
        //console.log(response)
    }

    return ( props.token !== "" ? <Navigate to="/dashboard" /> :
        <div>

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
