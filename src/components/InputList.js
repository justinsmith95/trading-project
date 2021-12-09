import React, { Component, useState, useEffect } from 'react'
import {
    Form,
    Button,
    InputGroup,
    ListGroup
} from "react-bootstrap";
import axios from 'axios';
import searchData from '../components/SearchBar';

export default function InputList() {
    return (
        <ListGroup>
        <ListGroup.Item>`${searchData.bestMatches[0].name}`,    `${searchData.bestMatches[0].symbol}`</ListGroup.Item>
        <ListGroup.Item>`${searchData.bestMatches[1].name}`,    `${searchData.bestMatches[1].symbol}`</ListGroup.Item>
        <ListGroup.Item>`${searchData.bestMatches[2].name}`,    `${searchData.bestMatches[2].symbol}`</ListGroup.Item>
        <ListGroup.Item>`${searchData.bestMatches[3].name}`,    `${searchData.bestMatches[3].symbol}`</ListGroup.Item>
    </ListGroup>
    )
}
