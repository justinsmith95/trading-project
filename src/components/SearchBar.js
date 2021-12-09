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


export default function SearchBar(props) {

    const [search, setSearch] = useState('');
    const [submit, setSubmit] = useState(false);
    const [searchData, setSearchData] = useState("");

    useEffect(() => {
        const fetchSearchData = async () => {
            const result = await getSearchData(search);

            console.log(result.data)

            setSearchData(result.data);

            fetchSearchData();
            
        }
    }, [submit]);


    return (
        <>
            <Form id="symbol-search">
                <Form.Label>Search</Form.Label>
                <input type="text" placeholder="Search by a stock's symbol" onChange={e => setSearch(e.target.value)} />
                {searchData.length > 0 && <InputList/>}
                <Button onSubmit={setSubmit(true)} type="submit">Search</Button>
            </Form>
        </>





    );



}