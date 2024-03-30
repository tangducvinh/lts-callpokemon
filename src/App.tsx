import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import { PokemonColection, PokemonInforDetail } from './companents'
import { Pokemon, Current } from './type'

type Pokemons = {
  name: string,
  ulr: string,
}

const initQuantity = 15

const App:React.FC = () => {
  const [ pokemons, setPokemons ] = useState<Pokemon[]>([])
  const [ quantity, setQuantity ] = useState<number>(initQuantity)
  const [ isLoading, setIsLoading ] = useState<boolean>(true)
  const [ current, setCurrent ] = useState<Current>({id: 0, isShow: false})

  const getPokemons = async() => {
    setIsLoading(true)
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${initQuantity}&offset=${quantity - initQuantity}`)

    if (response.status === 200) {
      response.data.results.forEach(async(item:Pokemons) => {
        const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
        setPokemons((prev) => ([...prev, pokemon.data]))
        setIsLoading(false)
      })
    }
  }

  useEffect(() => {
    getPokemons()
  }, [quantity])

  return (
    <div className="App">
      <div className='container'>
        {current.isShow && 
          <div className='pokemon-detail' onClick={() => setCurrent((prev => ({...prev, isShow: false})))}>
            <PokemonInforDetail pokemon={pokemons.find(item => item.id === current.id)} />
          </div>
        }

        <header className='pokemon-header'>
          <h1>Pokemon</h1>
        </header>

        <PokemonColection onSetCurrent={setCurrent} pokemons={pokemons} />

        <div className="btn-container">
          <button className='btn-load' onClick={() => setQuantity((prev) => prev + initQuantity)}>{`${isLoading ? 'Loading...' : 'Load more'}`}</button>
        </div>
      </div>
    </div>
  );
}

export default App;
