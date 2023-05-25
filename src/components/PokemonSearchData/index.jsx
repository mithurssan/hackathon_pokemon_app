import React from 'react'
import PokemonCard from '../PokemonCard'

const PokemonSearchData = ({ data }) => {
  console.log(data)
  return (
    <>
      <div className='search-container'>
        {data && <PokemonCard pokemon={data[0]} />}
      </div>
    </>
  )
}

export default PokemonSearchData
