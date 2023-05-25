import React from "react"
import "./style.css"

const PokemonCard = ({ pokemon }) => {
    console.log(pokemon)
    return (
        <div className="pokemon-card-container">
            <div className="pokemon-card">
                <h2>{pokemon.name}</h2>
                <img src={pokemon.sprites["front_default"]} alt={pokemon.name} />
                <ul>Abilities:
                    {pokemon.abilities.map(
                        abilities => <li key={abilities.ability.name}>{abilities.ability.name}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default PokemonCard
