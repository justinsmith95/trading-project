import React, { Component, useState } from "react";
import Chart from 'react-apexcharts';
import ReactApexChart from "react-apexcharts";
import { formatData } from "../utilities/chartHelper"
// import { stockData } from "../data/stockData"
import { symbol } from "prop-types";


export default function TradingChart(props) {


    const [symbol, setSymbol] = useState(['TSLA'])
    const [alphaData, setAlphaData] = useState([])

    useEffect(() => {
        const fetchStockData = async () => {
            const result = await getChartData(symbol);
    
            console.log(result.data)

            setAlphaData(formatData(result.data["Time Series (Daily)"]));
        };
    
        fetchStockData();
    }, []);

    let newData = formatData(alphaData["Time Series (Daily)"])
    console.log(newData)

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
            text: symbol,
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
    const [series, setSeries] = useState(newData.series)
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
