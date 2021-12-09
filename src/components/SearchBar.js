import React, { Component, useState, useEffect } from "react";
import {
    Form,
    Button,
    InputGroup,
    ListGroup
} from "react-bootstrap";
import axios from 'axios';
import { getSearchData } from '../utilities/axiosHelper'

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
    ), [submit])


    return (
        <>
            <Form id="symbol-search">
                <Form.Label>Search</Form.Label>
                <input type="text" placeholder="Search by a stock's symbol" onChange={e => setSearch(e.target.value)} />
                <ListGroup>
                    <ListGroup.Item>`${searchData.bestMatches[0].name}`,    `${searchData.bestMatches[0].symbol}`</ListGroup.Item>
                    <ListGroup.Item>`${searchData.bestMatches[1].name}`,    `${searchData.bestMatches[1].symbol}`</ListGroup.Item>
                    <ListGroup.Item>`${searchData.bestMatches[2].name}`,    `${searchData.bestMatches[2].symbol}`</ListGroup.Item>
                    <ListGroup.Item>`${searchData.bestMatches[3].name}`,    `${searchData.bestMatches[3].symbol}`</ListGroup.Item>
                    <ListGroup.Item>`${searchData.bestMatches[4].name}`,    `${searchData.bestMatches[4].symbol}`</ListGroup.Item>
                </ListGroup>
                <Button onSubmit={setSubmit(true)} type="submit">Search</Button>
            </Form>
        </>





    );



}