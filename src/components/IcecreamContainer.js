import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyIcecream } from '../redux';

const IcecreamContainer = () => {
    const [number, setNumber] = useState(1)
    const numOfIceCreamAvailable = useSelector(state => state.icecream.numOfIcecream)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Number of Icecream: {numOfIceCreamAvailable}</h2>
            <input className='input' type='text' value={number} onChange={e => setNumber(e.target.value)} />
            <button className='btn' onClick={() => dispatch(buyIcecream(number))}>Buy {number} Icecream</button>
        </div>
    )
}

export default IcecreamContainer