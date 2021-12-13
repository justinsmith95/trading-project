import React, { useReducer, useState} from 'react'
import TradingChart from '../components/TradingChart'
import axiosHelper from '../utilities/axiosHelper'
import SearchBar from '../components/SearchBar';
import {reducer, initialState} from '../utilities/reducer'
import {actionChange, actionSubmit, actionBroken} from '../utilities/actions'
import { Navigate, useNavigate, } from "react-router-dom";




export default function TradeSim(props) {

const [state, dispatch] = useReducer(reducer, initialState);



const[symbol, setSymbol] = useState("")


return( props.token == "" ? <Navigate to="/landingpage" /> :
    <>
    <SearchBar setSymbol={setSymbol}/>
    {symbol.length > 0 && <TradingChart symbol={symbol}/>}
    <p>
    </p>
    </>
)


}