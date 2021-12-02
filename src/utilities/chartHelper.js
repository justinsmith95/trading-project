export const formatData = (ugly) => {
    let pretty = {
        series: [{
            data: []
        }]
    }
    let keys = Object.keys(ugly)
    for (const key of keys) {
        let subObj = ugly[key]
        let subKeys = Object.keys(subObj)
        subKeys.pop()
        let arr = []
        for (let subKey of subKeys) {
            arr.push(parseFloat(subObj[subKey]))
        }
        let obj = { x: new Date(key), y: arr }
        pretty.series[0].data.push(obj)
    }
    return pretty
}


// currentFormat = 
// {
//     "Time Series (Daily)": {
    
//     "2020-12-31": {
//     "1. open": "28.6400",
//     "2. high": "29.3100",
//     "3. low": "28.3400",
//     "4. close": "28.8300",
//     "5. volume": "91266"
//     },
//     "2020-12-30": {
//     "1. open": "28.6300",
//     "2. high": "30.2500",
//     "3. low": "28.2570",
//     "4. close": "28.4700",
//     "5. volume": "80936"
//     },

// desiredFormat = 
//     series: [{
//         data: [{
//           x: new Date(2016, 01, 01),
//           y: [51.98, 56.29, 51.59, 53.85]
//         },
//         {
//           x: new Date(2016, 02, 01),
//           y: [53.66, 54.99, 51.35, 52.95]
//         },
//         .
//         .
//         .
//         {
//           x: new Date(2016, 08, 01),
//           y: [52.76, 57.35, 52.15, 57.03]
//         }]
//       }]







