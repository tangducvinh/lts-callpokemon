import { Dispatch, SetStateAction } from "react"


import { Pokemon, Current } from "../type"
import { PokemonList } from '../companents'

type Props = {
    pokemons: Pokemon[],
    onSetCurrent: Dispatch<SetStateAction<Current>>,
}

const PokemonColection:React.FC<Props> = (props) => {
    const { pokemons, onSetCurrent } = props

    return (
        <div>
            <section className="collection-container">
                {pokemons.map((pokemon) => (
                    <div className='pokemon-item' key={pokemon.id} onClick={() => onSetCurrent({id: pokemon.id, isShow: true})}>
                        <PokemonList 
                            key={pokemon.id} 
                            id={pokemon.id}
                            image={pokemon.sprites.front_default}
                            name={pokemon.name}
                            abilities={pokemon.abilities}
                        />
                    </div>
                ))}
            </section>
        </div>
    )
}

export default PokemonColection