import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import TradingChart from '../components/TradingChart'
import axiosHelper from '../utilities/axiosHelper'
import SearchBar from '../components/SearchBar';
import { reducer, initialState } from '../utilities/reducer'
import { actionChange, actionSubmit, actionBroken } from '../utilities/actions';
import {
    Form,
    Button,
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    Card
} from "react-bootstrap";
import WatchList, {watchListArray} from '../components/WatchList';




export default function Dashboard(props) {

    useEffect(() => {
       localStorage.getItem(watchListArray)
        
    }, []);


    const [symbol, setSymbol] = useState("")

    return (props.token == "" ? <Navigate to="/landingpage" /> :
        <>
            <Row>
                <p></p>
            </Row>

            <Row>
                <Col className="col-1"></Col>
                <Col>
                    <SearchBar setSymbol={setSymbol} />
                    {symbol.length > 0 && <TradingChart symbol={symbol} />}
                    <p>
                    </p>
                </Col>
                <Col>
                    <WatchList watchListArray={watchListArray}> </WatchList>
                </Col>
                <Col className="col-1"></Col>
            </Row>
        </>
    )


}