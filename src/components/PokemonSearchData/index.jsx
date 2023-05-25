import React from 'react'
import PokemonCard from '../PokemonCard'

const PokemonSearchData = ({ data }) => {
  console.log(data)
  return <>{data && <PokemonCard pokemon={data[0]} />}</>
}

export default PokemonSearchData
