import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

const HookCakeContainer = () => {
  const numOfCakesAvailable = useSelector(state => state.cake.numOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Cakes: {numOfCakesAvailable}</h2>
      <button className='btn' onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  )
}

export default HookCakeContainer