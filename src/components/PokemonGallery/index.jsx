import React from "react"
import PokemonItem from "../PokemonItem"
import "./style.css"

const PokemonGallery = ({ pokemons }) => {
    return (
        <div className="pokemon">
            <h1>List of 100 Pokemons!</h1>
            {
                pokemons.map(pokemon => <PokemonItem key={pokemon.name} pokemon={pokemon} />)
            }
        </div>
    )
}

export default PokemonGallery
