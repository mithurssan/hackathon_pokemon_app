import React from "react"
import "./style.css"

const PokemonCard = ({ pokemon }) => {
    console.log(pokemon)
    return (
        <div className="pokemon-card-container">
            <div className="pokemon-card">
                <h2>{pokemon.name}</h2>
                <img src={pokemon.sprites["front_default"]} alt={pokemon.name} />
                <p className="physicals">Weight: {pokemon.weight} , Height: {pokemon.height}</p>
                <ul className="abilities">Abilities:
                    {pokemon.abilities.map(
                        abilities => <li key={abilities.ability.name}>{abilities.ability.name}</li>
                    )}
                </ul>
                <ul className="types">Types:
                    {pokemon.types.map(
                        types => <li key={types.type.name}>{types.type.name}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default PokemonCard
