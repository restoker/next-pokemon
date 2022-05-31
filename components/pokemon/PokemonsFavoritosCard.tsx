import React, { FC } from 'react'
import { useRouter } from 'next/router'

interface Props {
    pokemon: number,
    children?: React.ReactNode | undefined | JSX.Element | JSX.Element[]
}

const PokemonsFavoritosCard: FC<Props> = ({ pokemon }: Props) => {
    const router = useRouter();

    const handleClickFavoritos = () => {
        router.push(`/pokemon/${pokemon}`);
    }

    return (
        <li
            className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200"
            onClick={handleClickFavoritos}
        >
            <div className="flex-1 flex flex-col px-8 py-4 z-10 rounded-md relative cursor-pointer hover:opacity-90">
                <img className="relative z-10 w-32 h-32 flex-shrink-0 mx-auto" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon}.png`} alt="pokemon" />
                <div className="absolute inset-0 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-green-500 to-slate-400 opacity-70 rounded-lg" />
                <h3 className="relative mt-6 text-gray-100 text-base font-bold">#{pokemon}</h3>
            </div>
        </li>
    )
}

export default PokemonsFavoritosCard