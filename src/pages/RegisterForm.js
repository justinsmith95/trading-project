import React from 'react'
import { useState, useEffect } from 'react'
import {
    Form,
    Button
} from "react-bootstrap"
import axios from "axios"
import {Navigate, useNavigate, useHistory} from "react-router-dom"

export default function RegisterForm(props) {
    const [data, setData] = useState({})
    const navigate = useNavigate()
    const [validated, setValidated] = useState({
        emailAddress: 0,
        confirmEmailAddress: 0,
        password: 0,
        confirmPassword: 0
    })
    const [error, setError] = useState(0)
    // const [userToken, setUserToken] = useState("");
    const handleChange = (e) => setData(prevState => ({
        ...prevState,
        [e.target.id]: e.target.value
    }))

    let emailAddress = "emailAddress";
    let confirmEmailAddress = "confirmEmailAddress";
    let password = "confirmPassword";
    let confirmPassword = "confirmPassword";


    // const handleValidate = (e) => setValidated(prevState => ({
    //     ...prevState,
    //     [e.target.id]: 1
    // }))

    //email password validator
    //have an error const for state
    //change emailFormValidator to an all-elements FormValidator, and have it fill the errors state when an input is false
    const FormValidator = () => {
        if (data.emailAddress) {
            //fix the email restriction requirement
            if (data.emailAddress.includes('@') && data.emailAddress.length > 5 && data.emailAddress.length < 65) {
                //good to go
                setValidated(prevState => ({
                    ...prevState,
                    emailAddress: 1
                }))
            } else {
                setValidated(prevState => ({
                    ...prevState,
                    emailAddress: -1
                }))
            }
        }

        if (data.confirmEmailAddress) {
            if (data.emailAddress === data.confirmEmailAddress) {
                setValidated(prevState => ({
                    ...prevState,
                    confirmEmailAddress: 1
                }))
            } else {
                setValidated(prevState => ({
                    ...prevState,
                    confirmEmailAddress: -1
                }))
            }
        }
        if (data.password) {
            if (data.password.length > 7) {
                setValidated(prevState => ({
                    ...prevState,
                    password: 1
                }))
            } else {
                setValidated(prevState => ({
                    ...prevState,
                    password: -1
                }))
            }
        }
        if (data.confirmPassword) {
            if (data.password === data.confirmPassword) {
                setValidated(prevState => ({
                    ...prevState,
                    confirmPassword: 1
                }))
            } else {
                setValidated(prevState => ({
                    ...prevState,
                    confirmPassword: -1
                }))
            }
        }

    }

    useEffect(FormValidator,
        [validated.emailAddress,
        validated.confirmEmailAddress,
        validated.password,
        validated.confirmPassword,
        data.emailAddress,
        data.confirmEmailAddress,
        data.password,
        data.confirmPassword
        ])

    const registerAPI_URL = "https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/auth/register";

    const postNewUser = () => {
        axios.post(registerAPI_URL, {
            name: data.emailAddress,
            email: data.emailAddress,
            password: data.password
        })
            .then(function (response) {
                console.log(response);
                let userToken = response.data.data.token
                // setUserToken(response.data.data.token)
                localStorage.setItem("userToken", userToken)
                props.setToken(userToken)
                navigate("/dashboard")
            })
            .catch(function (error) {
                console.log(error)
            })
        console.log(data)
    }

    // headers: {    'Accept': 'application/json',    'Content-Type': 'application/json',    'Access-Control-Allow-Origin': '*', }   // 'Access-Control-Allow-Headers': 'Content-Type',    // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',    // 'Access-Control-Allow-Credentials': true,    'Authorization': 'Bearer ' + token   },



    const submitRegisterForm = (e) => {
        e.preventDefault();
        // //package data to send to api
        console.log(validated.emailAddress)
        console.log(validated.password)
        if ((validated.emailAddress === 1) &&
            (validated.confirmEmailAddress === 1) &&
            (validated.password === 1) &&
            (validated.confirmPassword) === 1) {
            postNewUser();
        }
    }

    //   const handleSubmit = () => {
    //       event.preventDefault();
    //     if error.length >= 1) {
    //       event.stopPropagation();
    //     } else {
    //     axios.post api 
    // }



    return (
        <Form onSubmit={submitRegisterForm}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    value={data.emailAddress || ""}
                    type="email"
                    id={emailAddress}
                    onChange={handleChange}
                    placeholder="Enter email"
                    className={validated.emailAddress === 1 ? "is-valid"
                        : validated.emailAddress === -1 ? "is-invalid"
                            : "null"}
                />
                <Form.Text className="text-muted">
                    Create an account with your Email address
    </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirmEmail">
                <Form.Label>Confirm  Email address</Form.Label>
                <Form.Control
                    value={data.confirmEmailAddress || ""}
                    type="email"
                    id="confirmEmailAddress"
                    onChange={handleChange}
                    placeholder="Confirm email"
                    className={validated.confirmEmailAddress === 1 ? "is-valid"
                        : validated.confirmEmailAddress === -1 ? "is-invalid"
                            : "null"}
                />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    value={data.password || ""}
                    type="password"
                    id="password"
                    onChange={handleChange}
                    placeholder="Password"
                    className={validated.password === 1 ? "is-valid"
                        : validated.password === -1 ? "is-invalid"
                            : "null"}
                />
                <Form.Text className="text-muted">
                    Choose a password (Must be at least 8 characters)
    </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    value={data.confirmPassword || ""}
                    type="password"
                    id="confirmPassword"
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    className={validated.confirmPassword === 1 ? "is-valid"
                        : validated.confirmPassword === -1 ? "is-invalid"
                            : "null"}
                />
            </Form.Group>

            <Button
                id="submitButton"
                onSubmit={submitRegisterForm}
                variant="primary"
                type="submit">
                Submit
  </Button>
        </Form>
    );
}