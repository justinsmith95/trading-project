import React, { useState } from 'react'
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




export default function Dashboard(props) {


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
                    <Card>
                        <Card.Header className="text-center" as="h5">My WatchList</Card.Header>
                        <Card.Body>

                            <ListGroup>
                                <ListGroup.Item action="info">
                                    Info  
                            <Button className="d-flex justify-content-right" variant="secondary">remove from list</Button>
  </ListGroup.Item>
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
                <Col className="col-1"></Col>
            </Row>
        </>
    )


}