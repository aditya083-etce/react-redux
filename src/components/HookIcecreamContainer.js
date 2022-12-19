import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyIcecream } from '../redux';

const HookIcecreamContainer = () => {
  const numOfIceCreamAvailable = useSelector(state => state.icecream.numOfIcecream)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Icecream: {numOfIceCreamAvailable}</h2>
      <button className='btn' onClick={() => dispatch(buyIcecream())}>Buy Icecream</button>
    </div>
  )
}

export default HookIcecreamContainer