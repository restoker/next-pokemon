import React, { Fragment } from 'react'
import PokemonsFavoritosCard from './PokemonsFavoritosCard'

interface Props {
    pokemons: number[],
    children?: React.ReactNode | undefined | JSX.Element | JSX.Element[]
}

const PokemonsFavoritos = ({ pokemons }: Props) => {
    return (
        <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-16 mx-auto">
            {pokemons.map((pokemon) => (
                <Fragment key={pokemon}>
                    <PokemonsFavoritosCard pokemon={pokemon} />
                </Fragment>
            ))}
        </ul>
    )
}

export default PokemonsFavoritos