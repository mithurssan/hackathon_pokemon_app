import React from 'react'
import Pokemon1 from '../../images/pokemon1.webp'
import Pokemon2 from '../../images/pokemon2.webp'
import Pokemon3 from '../../images/pokemon3.webp'
import Pokemon4 from '../../images/pokemon4.webp'
import { Button } from '../../components'
import { useNavigate } from 'react-router-dom'
import './style.css'

const Home = () => {
  const navigate = useNavigate()

  const favourite = () => {
    navigate('/search')
  }

  const explore = () => {
    navigate('/list')
  }

  return (
    <div className='container'>
      <h1 className='heading'>Who is the best pokemon of all time?</h1>
      <div className='image-container'>
        <img src={Pokemon1} alt='flash' className='image down' />

        <img src={Pokemon2} alt='supergirl' className='image' />
        <img src={Pokemon4} alt='batman' className='image ' />
        <img src={Pokemon3} alt='superman' className='image down' />
      </div>
      <div className='button-container'>
        <Button navigate={favourite} displayText='Find Your Favourite' />
        <Button navigate={explore} displayText='Explore All Pokemons' />
      </div>
    </div>
  )
}

export default Home
