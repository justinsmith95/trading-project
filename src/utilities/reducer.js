import React from 'react';


export const initialState = {symbol: 'TSLA'};

// action must be an object {type: 'string'}

export function reducer(state, action) {
    switch (action.type) {
        case 'onChange':
            return {symbol: state.symbol + 1};
        case 'onSubmit':
            return {symbol: state.symbol - 1};
        default:
            throw new Error("action not defined");
    }
}


