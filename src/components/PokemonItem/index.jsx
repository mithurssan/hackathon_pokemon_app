import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

const PokemonItem = ({ pokemon }) => {
    return (
        <ul className="pokemon-list">
            <li className="pokemons">
                <Link to={`${pokemon.name}`}>
                    {pokemon.name}
                </Link>
            </li>
        </ul>

    )
}

export default PokemonItem
