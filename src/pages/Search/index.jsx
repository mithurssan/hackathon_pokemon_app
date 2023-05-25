import React, { useState, useEffect } from 'react'

const Search = () => {
  const [search, setSearch] = useState('')
  const [search1, setSearch1] = useState('')

  const searchHandler = (e) => {
    setSearch(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault()
    setSearch1(search)
  }

  useEffect(() => {
    async function getData() {
      const response = await fetch(
        `https://www.superheroapi.com/api.php/917578506211536/search/${search1}`,
        {
          method: 'GET',
          mode: 'cors',
        }
      )
      const data = await response.json()

      if (data.results && data.results.length > 0) {
        console.log(data.results[0].id)
      } else {
        console.log('No results found.')
      }
    }
    getData()
  }, [search1])

  return (
    <form>
      <input type='text' onChange={searchHandler} />
      <button className='buttons' onClick={submitHandler}>
        Search
      </button>
    </form>
  )
}

export default Search
