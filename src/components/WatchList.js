import React, { useState, useEffect } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import TradingChart from '../components/TradingChart'
import axiosHelper from '../utilities/axiosHelper'
import SearchBar from '../components/SearchBar';
import {
    Form,
    Button,
    Row,
    Col,
    ListGroup,
    ListGroupItem,
    Card
} from "react-bootstrap";
import WatchListItem from './WatchListItem';

export default function WatchList(props) {
    return (
        <Card>
            <Card.Header className="text-center" as="h5">My WatchList</Card.Header>
            <Card.Body>
                <ListGroup>
                    {props.watchListArray.length > 0
                        ? props.watchListArray.map((item, index) => <WatchListItem data={item} key={index} getWatchListData={props.getWatchListData}/>)
                        : <p>No items on your WatchList. Add some!</p>}
                </ListGroup>
            </Card.Body>
        </Card>
    )
}





