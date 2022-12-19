import { BUY_ICECREAM } from "./icecreamTypes";

const initialState = {
    numOfIcecream: 20
}

const icecreamReducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIcecream: state.numOfIcecream - action.payload
        }
        default: return state
    }
}

export default icecreamReducer;