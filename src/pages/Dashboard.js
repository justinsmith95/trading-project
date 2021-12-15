import React, { useState, useEffect, } from 'react'
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
import WatchList from '../components/WatchList';
import { formatData } from "../utilities/chartHelper";
import { getChartData } from "../utilities/axiosHelper";



export default function Dashboard(props) {


    const [watchListArray, setWatchListArray] = useState([]);

    useEffect(() => {
        let lsArr = JSON.parse(localStorage.getItem('watchListArray'))
        if (lsArr) {
            setWatchListArray(lsArr)
        }
    }, []);

    const [symbol, setSymbol] = useState("")

    // const [symbol, setSymbol] = useState('TSLA')
    const [alphaData, setAlphaData] = useState({})

    const [series, setSeries] = useState([])



    const fetchStockDataOnChange = async (newSymbol) => {
        const result = await getChartData(newSymbol);


        console.log(result.data)
        setAlphaData(result.data)

        let newData = formatData(result.data["Time Series (Daily)"])
        console.log(newData);

        setSeries(newData.series);
    };




    useEffect(() => {
        const fetchStockDataOnLoad = async () => {
            console.log({ symbol })
            if (symbol.length > 0) {

                const result = await getChartData(symbol);

                console.log(result.data)
                setAlphaData(result.data)

                let newData = formatData(result.data["Time Series (Daily)"])
                console.log(newData);

                setSeries(newData.series);
            }
        };
        fetchStockDataOnLoad()
    }, [symbol]);

 

    const addToWatchList = () => {
        console.log(alphaData)
        // console.log(watchListArray)
        //  console.log("error");
        // if (Object.keys(alphaData).length > 0) {
        setWatchListArray(prevList => {
            let newList = prevList.concat({ symbol: alphaData['Meta Data']['2. Symbol'] })
            window.localStorage.setItem('watchListArray', JSON.stringify(newList))
            return newList;
        })
        // }
        // click button to add the currrent stock to watchlist, send data.name and data.symbol
    }

    const removeFromWatchList = (clickedSym) => {
        setWatchListArray(prevList => {
            let newList = prevList.filter(item => {
                if (item.symbol !== clickedSym) {
                    return item
                }
            })
            window.localStorage.setItem('watchListArray', JSON.stringify(newList))
            console.log(newList);
            return newList;
        })
    }

    const getWatchListData = (clickedSym) => {
        fetchStockDataOnChange(clickedSym)
        setSymbol(clickedSym);

    }




    return (props.token == "" ? <Navigate to="/landingpage" /> :
        <>
            <Row>
                <p></p>
            </Row>

            <Row>
                <Col className="col-1"></Col>
                <Col>
                    <SearchBar setSymbol={setSymbol} />
                    {symbol.length > 0 && <TradingChart symbol={symbol} setWatchListArray={setWatchListArray} series={series} addToWatchList={addToWatchList} />}
                    <p>
                    </p>
                </Col>
                <Col>
                    <WatchList removeFromWatchList={removeFromWatchList} setWatchListArray={setWatchListArray} watchListArray={watchListArray} getWatchListData={getWatchListData} />
                </Col>
                <Col className="col-1"></Col>
            </Row>
        </>
    )


}