import React, { Component, useState, useEffect } from "react";
import {
    Form,
    Button,
    InputGroup
} from "react-bootstrap";
import axios from 'axios';

export default function SearchBar(props) {

    const [search, setSearch] = useState('');

    return (
        <>
        <Form.Label>Search</Form.Label>
        <input type="text" placeholder="Search by a stock's symbol" onChange={e => setSearch(e.target.value)} />
        <Button type= "submit">Search</Button>
        </>





    );



}