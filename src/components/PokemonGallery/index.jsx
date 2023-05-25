import React from "react"
import PokemonItem from "../PokemonItem"

const PokemonGallery = ({ pokemons }) => {
    return (
        <div className="pokemon">
            {
                pokemons.map(pokemon => <PokemonItem key={pokemon.name} pokemon={pokemon} />)
            }
        </div>
    )
}

export default PokemonGallery
