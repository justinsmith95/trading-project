import React, { Component, useState, useEffect } from "react";
import {
    Form,
    Button,
    InputGroup,
    ListGroup
} from "react-bootstrap";
import axios from 'axios';
import { getSearchData } from '../utilities/axiosHelper';
import InputList from '../components/InputList';
import TradingChart from '../components/TradingChart';
import { symbol, setSymbol } from "prop-types";
import {reducer, initialState} from '../utilities/reducer'
import {actionChange, actionSubmit, actionBroken} from '../utilities/actions'


export default function SearchBar(props) {

    const [search, setSearch] = useState('');
    const [submit, setSubmit] = useState(false);
    const [searchData, setSearchData] = useState("");


/////////// onSubmit run api call for stock data //////////////////////////////////
    useEffect(() => {
        const fetchSearchData = async () => {
            const result = await getSearchData(search);

            console.log(result.data);

            setSearchData(result.data);

            setSymbol(result.data.bestMatch[0].symbol);

            
        }
        fetchSearchData();

    }, [submit]);
//////////////////////////////////////////////////////////////////////////////////

///////// onChange of search bar input, run api call for search results of symbols /////////
    useEffect(() => {
        const fetchSearchData = async () => {
            const result = await getSearchData(search);

            console.log(result.data)

            setSearchData(result.data);

            
        }
        fetchSearchData();
    }, [search]);
////////////////////////////////////////////////////////////////////////////////////////////

const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>
            <Form id="symbol-search">
                <Form.Label>Search</Form.Label>
                <input type="text" placeholder="Search by a stock's symbol" onChange={e => setSearch(e.target.value), dispatch(actionChange)} />
                {searchData.length > 0 && <InputList/>}
                <Button onSubmit={setSubmit(true)} type="submit">Search</Button>
            </Form>
        </>





    );



}