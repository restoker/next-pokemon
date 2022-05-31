import React, { FC } from 'react'
import { Pokemon } from '../../interfaces/pokemon-list';
import { useRouter } from 'next/router';

interface Props {
    pokemon: Pokemon,
    children?: React.ReactNode | undefined | JSX.Element | JSX.Element[]
}

const PokemonCard: FC<Props> = ({ pokemon }) => {
    const router = useRouter();
    const handleClick = () => {
        router.push(`/pokemon/${pokemon.id}`);
    }
    const handleClickName = () => {
        router.push(`/nombre/${pokemon.name}`);
    }
    return (
        <li
            className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
            onClick={handleClickName}
        >
            <div className="flex-1 flex flex-col px-8 py-4 z-10 rounded-md relative cursor-pointer hover:opacity-90">
                <img className="relative z-10 w-32 h-32 flex-shrink-0 mx-auto" src={pokemon.imagen} alt="pokemon" />
                <h3
                    className="relative mt-6 text-gray-100 text-base font-bold z-10"
                    onClick={handleClick}
                >#{pokemon.id}</h3>
                <div className="absolute inset-0 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-green-500 to-slate-400 opacity-70 rounded-lg" />
                <dl
                    className="relative mt-1 flex-grow flex flex-col justify-between"
                    onClick={handleClickName}
                >
                    <dt className="sr-only">Title</dt>
                    <dd className="text-gray-100 text-sm font-bold capitalize">{pokemon.name}</dd>
                    <dt className="sr-only">Role</dt>
                </dl>
            </div>
        </li>
    )
}

export default PokemonCard
