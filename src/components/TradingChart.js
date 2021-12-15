import React, { Component, useState, useEffect } from "react";
import Chart from 'react-apexcharts';
import ReactApexChart from "react-apexcharts";
// import { stockData } from "../data/stockData"

import SearchBar from "../components/SearchBar";
import { reducer, initialState } from '../utilities/reducer'
// import {actionChange, actionSubmit, actionBroken} from '../utilities/actions'
import {
    Form,
    Button,
    InputGroup,
    ListGroup,
    Row,
    Col,
} from "react-bootstrap";
import WatchList from '../components/WatchList'


export default function TradingChart(props) {




    const options = {
        chart: {
            type: 'candlestick',
            height: 500,
            zoom: {
                enabled: true,
                type: 'xy',
                resetIcon: {
                    offsetX: -10,
                    offsetY: 0,
                    fillColor: '#fff',
                    strokeColor: '#37474F'
                },
                selection: {
                    background: '#90CAF9',
                    border: '#0D47A1'
                }
            }
        },
        title: {
            text: props.symbol,
            align: 'left'
        },
        xaxis: {
            type: 'datetime'
        },
        yaxis: {
            tooltip: {
                enabled: true
            }
        }
    };



    return (
        <div className="mixed-chart" >
            <Chart
                options={options}
                series={props.series}
                type="candlestick"
                height={500}
                width={800}
            />
            <Button onClick={props.addToWatchList}>Add to WatchList</Button>
        </div >
    );
}
