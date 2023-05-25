import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { PokemonCard } from "../../components"

const PokemonItem = () => {
  const [pokemon, setPokemon] = useState("");
  const { name } = useParams();

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      const data = await response.json();
      setPokemon(data)
    }

    fetchPokemon()
  }, [])

  return (
    <>
      {
        pokemon ? < PokemonCard pokemon={pokemon} /> : "Not found"
      }
    </>
  )
}

export default PokemonItem
