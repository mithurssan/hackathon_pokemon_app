import React, { useState } from 'react'
import Button from '../Button'

const PokemonSearch = ({ setSearch, input, setInput }) => {
  const searchHandler = (e) => {
    setInput(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setSearch(input)
    setInput('')
  }

  return (
    <form>
      <input type='text' onChange={searchHandler} value={input} />
      <Button navigate={submitHandler} displayText='Search' />
    </form>
  )
}

export default PokemonSearch
