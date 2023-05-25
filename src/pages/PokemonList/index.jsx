import React, { useState, useEffect } from 'react'
import { PokemonGallery } from "../../components"

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon")
        const data = await response.json()
        setPokemons(data.results)
        setLoading(false)
      } catch (error) {
        console.log(error.message)
      }
    }
    fetchPokemon()
  }, [])

  return (
    <>
      {
        loading ? <p>Loading...</p> : <PokemonGallery pokemons={pokemons} />
      }
    </>
  )
}

export default PokemonList
