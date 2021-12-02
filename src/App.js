import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useNavigate,
    Link,
    AppContext,
} from "react-router-dom";
import TradingNavbar from './pages/TradingNavbar';
import LoginForm from './pages/LoginForm';
import RegisterForm from './pages/RegisterForm';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import TradeSim from './pages/TradeSim.js';
import axios from "axios"
import { Navbar, Container, Nav } from 'react-bootstrap'

function App(props) {

    const [userData, setUserData] = useState({})
    const [token, setToken] = useState("")
    const navigate = useNavigate();

    //      get User Info from Auth token API Call (3)
    const getUserInfo = () => {
        axios.get("https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/auth/user", {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(function (response) {
                console.log(response);
                setUserData(response.data.data.user_data)
                //    setUserName()
            })
            .catch(function (error) {
                console.log(error)
            })
    }


    // logout user API Call
    const logoutUser = () => {
        console.log(token)
        axios.get("https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/auth/logout", {
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
            .then(function (response) {
                console.log(response);
                setToken("");
                setUserData({});
                window.localStorage.removeItem("userToken")
                navigate("/landingpage")

            })
            .catch(function (error) {
                console.log(error)
            })
        console.log(token)

    }


    useEffect(() => {
        console.log("onmount")
        let LS = localStorage.getItem('userToken');
        if (LS) {
            setToken(LS);
        }
        // getUserInfo();
    }, [])
    console.log(token);

    useEffect(() => {
        console.log("ontokenchange")
        if (token.length > 0) {
            getUserInfo();
        }
    }, [token])





    //conditional rendering based on loggedin status
    return (
        <>
            {/* <AppContext.Provider value={InitialContext}> */}
            <TradingNavbar
                userName={userData.name}
                logoutUser={logoutUser}
                token={token}
            />

            <Routes>
                <Route path='/'>


                    <Route path="LogInForm"
                       element={<LoginForm
                            setToken={setToken}
                            token={token}
                        />}/>
                   

                    <Route path="TradeSim" element={
                        <TradeSim setToken={setToken} token={token}
                        />}/>

                    <Route path="RegisterForm" element={<RegisterForm  setToken={setToken} />}/>
                    <Route path="Dashboard" element={<Dashboard userName={userData.name} token={token}/>} />
                    <Route path="landingpage" index element={<LandingPage  token={token}/>} />
                    <Route path="*" element={<LandingPage />} />
                </Route>
            </Routes>

            {/* </AppContext.Provider> */}
        </>
    );
}

export default App;
