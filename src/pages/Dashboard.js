import React from 'react'
import { Navigate, useNavigate, } from "react-router-dom";



export default function Dashboard(props) {

    let navigate = useNavigate();
    const tradeSimButton = () => {
        navigate("/TradeSim");
    }

    return ( props.token.length <= 0 ? <Navigate to="/landingpage" /> :


        <div>



            <p> Howdy {props.userName}, welcome to your Dashboard. View and edit your trade strategies, or create a new one!
        <button type="button" className="btn btn-primary my-2" onClick={tradeSimButton}> Start trading </button> {""}
            </p>

        </div>


    )
}