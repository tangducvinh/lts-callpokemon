type Props = {
    name: string,
    id: number,
    image: string,
    abilities: {
        ability: {
            name: string,
        }
    }[]
}

const PokemonList:React.FC<Props> = (props) => {
    const { name, id, image } = props

    return (
        <div>
            <section className="pokemon-list-container">
                <p className='pokemon-name'>{name}</p>
                <img src={image} alt="" className="pokemon-img" />
            </section>
        </div>
    )
}

export default PokemonList