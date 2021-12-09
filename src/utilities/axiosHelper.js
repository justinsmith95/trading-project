import axios from "axios";
import { symbol } from "prop-types";
import localForage from 'localforage';
import { setupCache } from 'axios-cache-adapter';


/////////////// axiosHelper basic Format ////////////////////////////////////
// export const axiosHelper = ({

//     url: "https://www.alphavantage.co/query",
//     method = 'get',
//     data = {},
//     successMethod = r => console.log(r),
//     failureMethod = e => console.log(e)
//     // token
// }) => {
//     return axios({
//         method,
//         url,
//         data
//         // header?
//     })
//     .then(res => {
//         console.log(res)
//         successMethod(res.data)
//     })
//     .catch(er => failureMethod(er));

// }
//////////////////////////////////////////////////////////////////////////////


const cache = setupCache({
    maxAge: 60 * 60 * 1000,
    store: localForage,
    exclude: {
        query: false
    }
});

const axiosInstance = axios.create({
    baseURL: 'https://www.alphavantage.co/query',
    adapter: cache.adapter
});

export const getChartData = (symbol) => {
    return axiosInstance.get('', {
        params: {
            function: 'TIME_SERIES_DAILY',
            symbol,
            apikey: "EADD7VFG8GG0ABQY"
        }
    })
};

export const getSearchData = (search) => {
    return axiosInstance.get('', {
        params: {
            function: 'SYMBOL_SEARCH',
            keywords: `${search}`,
            apikey: "EADD7VFG8GG0ABQY"
        }
    })
};
// "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SPX&outputsize=full&apikey=EADD7VFG8GG0ABQY"import axios from "axios";



/////////////// axiosHelper basic Format ////////////////////////////////////
// export const axiosHelper = ({

//     url: "https://www.alphavantage.co/query",
//     method = 'get',
//     data = {},
//     successMethod = r => console.log(r),
//     failureMethod = e => console.log(e)
//     // token
// }) => {
//     return axios({
//         method,
//         url,
//         data
//         // header?
//     })
//     .then(res => {
//         console.log(res)
//         successMethod(res.data)
//     })
//     .catch(er => failureMethod(er));

// }
//////////////////////////////////////////////////////////////////////////////



// "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SPX&outputsize=full&apikey=EADD7VFG8GG0ABQY"