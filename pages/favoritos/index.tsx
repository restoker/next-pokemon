import React, { FC, Fragment, useEffect, useState } from 'react'
import Layout from '../../components/layouts/Layout';
import PokemonsFavoritos from '../../components/pokemon/PokemonsFavoritos';

const Favoritos: FC = () => {
    const [pokemons, setPokemons] = useState<number[]>([]);

    useEffect(() => {
        const favoritos: number[] = JSON.parse(localStorage.getItem("pokemons") || "[]");
        if (favoritos.length === 0) {
            localStorage.setItem('pokemons', JSON.stringify([]));
        } else {
            setPokemons(favoritos);
        }
    }, [])


    return (
        <Layout titulo='Favoritos'>
            {pokemons.length === 0
                ?
                (
                    <div className='absolute w-full h-full flex justify-center items-center'>
                        <h1 className='mt-20 text-slate-800 text-center text-4xl leading-tight italic font-bold line-clamp-1'>No tienes ningún pokemon en tu lista de favoritos</h1>
                    </div>
                )
                :
                (
                    <PokemonsFavoritos pokemons={pokemons} />
                )
            }
        </Layout>
    )
}


export default Favoritos
