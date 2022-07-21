const counterValueReducer = (state = 0, { type, payload }) => {
    switch (type) {       
        case 'counter/onIncrement':
            return state + payload
            
        case 'counter/onDecrement':
            return state - payload
    
        default:
            return state;
    }
};

export default counterValueReducer;