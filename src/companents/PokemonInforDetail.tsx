
import { Pokemon } from "../type"

type Props = {
    pokemon: Pokemon | undefined
}

const PokemonInforDetail:React.FC<Props> = ( props ) => {
    const { pokemon } = props

    return (
        <div className='pokemon-infor-detail'>
            <img src={pokemon?.sprites.front_default} alt="img" className="pokemon-detail-img" />

            <p className='pokemon-detail-name'>{pokemon?.name}</p>

            <div className="pokemon-detail-skills">
                <p className="pokemon-detail-skill-text">Skills</p>
                {pokemon?.abilities.map((item, index) => (
                    <p key={index} className="pokemon-detail-skill">{`${index + 1}. ${item.ability?.name}`}</p>
                ))}
            </div>
        </div>
    )
}

export default PokemonInforDetail