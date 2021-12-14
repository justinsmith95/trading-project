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
import WatchListItem from '../components/WatchListItem';

export default function WatchList(props) {


    const [watchListArray, setWatchListArray] = useState([]);

    useEffect(() => {
      console.log(watchListArray);
      localStorage.setItem(watchListArray)
    }, [watchListArray])




    return (

        <Card>
            <Card.Header className="text-center" as="h5">My WatchList</Card.Header>
            <Card.Body>

                <ListGroup>
                    {watchListArray.map((item, index) => {
                        return (
                        watchListArray.length === 0 ?
                                <p>No items on your WatchList. Add some!</p> :
                                <WatchListItem
                                    data={item}
                                    key={index}
                                />
                        )
                    })
                    }
                </ListGroup>
            </Card.Body>
        </Card>


    )
}





