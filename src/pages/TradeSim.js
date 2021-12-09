import React, { useReducer } from 'react'
import TradingChart from '../components/TradingChart'
import axiosHelper from '../utilities/axiosHelper'
import SearchBar from '../components/SearchBar';
import {reducer, initialState} from '../utilities/reducer'
import {actionChange, actionSubmit, actionBroken} from '../utilities/actions'




export default function TradeSim() {

const [state, dispatch] = useReducer(reducer, initialState);

const actionChange = { type: 'change' };
const actionSubmit = { type: 'submit' };
const actionBroken = { type: 'whatevs' };

return(
    <>
    <SearchBar/>
    <TradingChart/>
    <p>
        Trade Tracker Dashboard here
    </p>
    </>
)


}