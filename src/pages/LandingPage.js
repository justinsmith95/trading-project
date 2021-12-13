import React, {useState, useEffect} from 'react';

import {Link} from 'react-router-dom';
import { Navigate, useNavigate } from "react-router-dom";
import { formatData } from "../utilities/chartHelper"
import {stockData} from "../data/stockData"
import TradingChart from "../components/TradingChart"


export default function Home(props) {
  

  
    
    let navigate = useNavigate();
    const LogInButton = () => {
        navigate("/LogInForm");
    }

    const RegisterButton = () => {
        navigate("/RegisterForm");
    }
            return  (  props.token !== "" ? <Navigate to="/dashboard" /> :
                <div>
        <p>
                    {/* {//*make log in log out same button change based on status* */}You must <Link to="/LogInForm">Log In</Link> to view stock information.
        <button type="button" className="btn btn-primary my-2" onClick={LogInButton}> {""} 
          Log In
        </button>
        </p>
        <p> Don't have an Account? <Link to="/RegisterForm">Register</Link> with us to track stock chart data and maintain a WatchList!
        <button type="button" className="btn btn-secondary my-2" onClick={RegisterButton}> Register </button> {""}
        </p>

</div>


)

}