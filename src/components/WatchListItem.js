import React, { props, Component, useState, useEffect } from "react";
import {
    Form,
    Button,
    InputGroup,
    ListGroup,
    Row,
    Col,
} from "react-bootstrap";
import axios from 'axios';
import { getSearchData, getChartData } from '../utilities/axiosHelper';
import InputList from '../components/InputList';
import { reducer, initialState } from '../utilities/reducer'
import { actionChange, actionSubmit, actionBroken } from '../utilities/actions'
// import {fetchStockData, setAlphaData, setSeries} from '../components/Tradingchart'
import {symbol, setSymbol} from "../pages/Dashboard";


export default function WatchListItem(props) {


    
    const getWatchListData = () => {

        // setSymbol(props.data.symbol);
        // fetchStockData();
    }





    return (

            <ListGroup.Item onClick={getWatchListData()} action="info">
                {props.data.name}     {props.data.symbol}
                            <Button className="d-flex justify-content-right" variant="secondary">remove from list</Button>
            </ListGroup.Item>
        



    );

}