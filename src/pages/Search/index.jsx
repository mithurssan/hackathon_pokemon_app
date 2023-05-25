import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { PokemonSearch, PokemonSearchData } from '../../components'

const Search = () => {
  const [search, setSearch] = useState('')
  const [input, setInput] = useState('')
  const [data, setData] = useState(null)

  useEffect(() => {
    async function getData() {
      if (search) {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${search}`
        )
        setData([response.data])
      } else {
        setData(null)
      }
    }

    getData()
  }, [search])

  return (
    <>
      <PokemonSearch setSearch={setSearch} input={input} setInput={setInput} />
      <div className='search-container'>
        {data && <PokemonSearchData data={data} />}
      </div>
    </>
  )
}

export default Search
