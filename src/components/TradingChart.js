import React, { Component, useState, useEffect } from "react";
import Chart from 'react-apexcharts';
import ReactApexChart from "react-apexcharts";
import { formatData } from "../utilities/chartHelper";
// import { stockData } from "../data/stockData"
import { getChartData } from "../utilities/axiosHelper";
import SearchBar from "../components/SearchBar";
import {reducer, initialState} from '../utilities/reducer'
import {actionChange, actionSubmit, actionBroken} from '../utilities/actions'


export default function TradingChart(props) {


    // const [symbol, setSymbol] = useState('TSLA')
    const [alphaData, setAlphaData] = useState([])

    useEffect(() => {
        const fetchStockData = async () => {
            const result = await getChartData(props.symbol);
    
            console.log(result.data)

            setAlphaData(result.data)
            
            let newData = formatData(result.data["Time Series (Daily)"])
            console.log(newData);

            setSeries(newData.series);
        };
    
        fetchStockData();
    }, []);


    const [options, setObject] = useState({
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
    })
    const [series, setSeries] = useState([])
    //    var options = {
    //         chart: {
    //           type: 'candlestick',
    //           height: 350
    //         },
    //         title: {
    //           text: 'CandleStick Chart',
    //           align: 'left'
    //         },
    //         xaxis: {
    //           type: 'datetime'
    //         },
    //         yaxis: {
    //           tooltip: {
    //             enabled: true
    //           }
    //         }
    //       }
 
    // const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="mixed-chart" >

            <Chart
                options={options}
                series={series}
                type="candlestick"
                height={500}
                width={800}
            />
        </div >



    );
}
