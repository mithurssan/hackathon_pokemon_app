import React from "react"
import { Link } from "react-router-dom"

const PokemonItem = ({ pokemon }) => {
    return (
        <Link to={`${pokemon.name}`}>
            <ul>
                <li>
                    {pokemon.name}
                </li>
            </ul>
            {/* <div className="pokemon-image">
                <img src={pokemon.image} alt={pokemon.name} />
            </div> */}
        </Link>
    )
}

export default PokemonItem

