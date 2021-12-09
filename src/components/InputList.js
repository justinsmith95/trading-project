import React, { Component, useState, useEffect } from 'react'
import {
    Form,
    Button,
    InputGroup,
    ListGroup,
    ListGroupItem
} from "react-bootstrap";
import axios from 'axios';

export default function InputList({searchData, updateSearch}) {

       return (
           <ListGroup>
               {searchData.bestMatches.map((match, index)=> {
                   return <ListGroup.Item onClick={()=>updateSearch(match['1. symbol'])} key={index}>{match['2. name']}-{match['1. symbol']}</ListGroup.Item>
               })}
    </ListGroup>
    )
}
