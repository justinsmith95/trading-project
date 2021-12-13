import React, { Component, useState, useEffect } from "react";
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
import {reducer, initialState} from '../utilities/reducer'
import {actionChange, actionSubmit, actionBroken} from '../utilities/actions'


export default function SearchBar({setSymbol}) {

    const [search, setSearch] = useState('');
    const [submit, setSubmit] = useState(false);
    const [searchData, setSearchData] = useState({});


/////////// onSubmit run api call for stock data //////////////////////////////////
    useEffect(() => {
        const fetchSearchData = async () => {
            if (submit && search.length > 0) {
                console.log('submitted')
                const result = await getSearchData(search);
    
                console.log(result.data);
    
                setSearchData(result.data);
    
                setSymbol(result.data.bestMatches[0]['1. symbol']);

                setSearchData("");

                setSubmit(false);

            }

            
        }
        fetchSearchData();
        // getChartData();

    }, [submit]);
//////////////////////////////////////////////////////////////////////////////////

const updateSearch = (sym) => {
    console.log(sym)
    setSearch(sym)
}


///////// onChange of search bar input, run api call for search results of symbols /////////
    useEffect(() => {

        const fetchSearchData = async () => {
            console.log('searching')
            if (search.length > 0) {
                console.log('search')
                console.log(search)
                const result = await getSearchData(search);

                console.log(result)
                console.log(search)
    
                console.log(result.data)
    
                setSearchData(result.data);
                // dispatch(actionChange);

            }


            
        }
        fetchSearchData();
    }, [search]);
////////////////////////////////////////////////////////////////////////////////////////////

// const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <>

        <Col>
            <Form id="symbol-search">
                <p></p>
                <Form.Label>Search</Form.Label>
                <input type="text" placeholder="Example: TSLA" onChange={e => setSearch(e.target.value)} value={search} />
                {Object.keys(searchData).length > 0 && search.length > 0 && <InputList updateSearch={updateSearch} searchData={searchData}/>}
                <Button onClick={()=>  setSubmit(true)} >Search</Button>
            </Form>
        </Col>
        </>





    );



}