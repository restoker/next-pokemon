import React, { useEffect } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { PokemonResponseName } from '../../interfaces'
import { PokemonName, PokemonAll } from '../../interfaces/pokemon-list';
import Layout from '../../components/layouts/Layout';
import { HeartIcon } from '@heroicons/react/outline'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/solid'
import { ParsedUrlQuery } from 'querystring';
import Confetti from 'canvas-confetti'
import { getPokemonInfo } from '../../helpers/getPokemonsInfo';

// interface Params extends ParsedUrlQuery {
//     name: string
// }

interface Props {
    pokemon: PokemonAll;
}

const PokemonPorNombre: NextPage<Props> = ({ pokemon }) => {
    // console.log(pokemon);
    const [pokemons, setPokemons] = React.useState<number[]>([]);
    const [isFavorite, setIsFavorite] = React.useState<boolean>(false);
    // console.log(isFavorite);

    useEffect(() => {
        const favoritos: number[] = JSON.parse(localStorage.getItem("pokemons") || "[]");
        if (favoritos.length === 0) {
            localStorage.setItem('pokemons', JSON.stringify([]));
        } else {
            const existe = favoritos.includes(pokemon.id);
            // const existe = favoritos.some(id => Number(pokemon.id) === id);
            if (existe) {
                setIsFavorite(true);
            }
            setPokemons(favoritos);
        }
    }, [])


    const handleFavoritos = () => {
        // verificar si el id del pokemon ya existe
        if (pokemons.length === 0) {
            Confetti({
                particleCount: 100,
                spread: 160,
                angle: -100,
                origin: { y: 0.1, x: 1 }
            })
            setIsFavorite(true);
            setPokemons([...pokemons, pokemon.id]);
            localStorage.setItem('pokemons', JSON.stringify([pokemon.id]));
        } else {
            const existe = pokemons.some(id => pokemon.id === id);
            if (!existe) {
                setIsFavorite(true);
                Confetti({
                    particleCount: 100,
                    spread: 160,
                    angle: -100,
                    origin: { y: 0.1, x: 1 }
                })
                setPokemons([...pokemons, pokemon.id]);
                localStorage.setItem('pokemons', JSON.stringify([...pokemons, pokemon.id]));
            } else {
                setIsFavorite(false);
                const nuevoPokemons = pokemons.filter(id => id !== pokemon.id);
                setPokemons(nuevoPokemons);
                localStorage.setItem('pokemons', JSON.stringify(nuevoPokemons));
            }
        }
    }

    return (
        <Layout titulo={`${pokemon.name}`}>
            <div className="mt-14 relative w-full h-full">
                {/* Image gallery */}
                <h1 className='px-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8 text-blue-700 sm:text-3xl font-extrabold tracking-tight'>{pokemon.name}</h1>
                <div className="mt-6 max-w-2xl grid grid-cols-1 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8 h-full divide-y-[0.5px] divide-gray-400 lg:divide-y-0">
                    {/* {conffeti && } */}
                    <div className="sm:rounded-lg sm:overflow-hidden lg:aspect-w-4 lg:aspect-h-4 lg:grid-cols-1 lg:col-span-1">
                        <img
                            src={pokemon.sprites.other?.home.front_default}
                            alt={pokemon.name}
                            className="w-full h-full object-center object-contain pb-6"
                        />
                    </div>

                    <div className="lg:grid lg:grid-cols-2 lg:gap-y-4 lg:gap-x-4 lg:col-span-2">
                        <div className="aspect-w-4 aspect-h-2 rounded-lg overflow-hidden">
                            <img
                                src={pokemon.sprites.other?.home.front_female || pokemon.sprites.front_shiny}
                                alt={pokemon.name}
                                className="w-full h-full object-center object-contain"
                            />
                        </div>
                        <div className="aspect-w-4 aspect-h-2 rounded-lg overflow-hidden">
                            <img
                                src={pokemon.sprites.other?.home.front_shiny}
                                alt={pokemon.name}
                                className="w-full h-full object-center object-contain"
                            />
                        </div>
                        <div className="aspect-w-4 aspect-h-2 rounded-lg overflow-hidden">
                            <img
                                src={pokemon.sprites.other?.home.front_shiny_female || pokemon.sprites.back_shiny}
                                alt={pokemon.name}
                                className="w-full h-full object-center object-contain"
                            />
                        </div>
                        <div className="aspect-w-4 aspect-h-2 rounded-lg overflow-hidden">
                            <img
                                src={pokemon.sprites.other?.['official-artwork'].front_default}
                                alt={pokemon.name}
                                className="w-full h-full object-center object-contain"
                            />
                        </div>
                    </div>
                </div>
                <button
                    type="button"
                    className="inline-flex items-center p-2 border-[3px] border-amber-400 rounded-full shadow-sm text-red-600 bg-transparent hover:opacity-75 focus:outline-none focus:ring-offset-2 absolute top-6 right-5 md:hidden"
                    onClick={handleFavoritos}
                >
                    {isFavorite ? <HeartIconSolid className="h-5 w-5 text-red-500" aria-hidden="true" /> : <HeartIcon className="h-5 w-5 text-red-500" aria-hidden="true" />}
                </button>
                <button
                    type="button"
                    className="items-center px-4 py-2 shadow-sm text-base font-medium rounded-md text-black bg-transparent hover:opacity-70 focus:outline-none border-[3px] focus:ring-offset-2 hidden md:absolute md:inline-flex md:top-7 right-5 border-amber-400"
                    onClick={handleFavoritos}
                >
                    {isFavorite ? 'Quitar de favoritos' : 'Añadir a favoritos'}
                    {isFavorite ? <HeartIconSolid className="ml-3 -mr-1 h-5 w-5 text-red-500" aria-hidden="true" /> : <HeartIcon className="ml-3 -mr-1 h-5 w-5 text-red-500" aria-hidden="true" />}
                </button>
            </div>
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=151';
    const resp = await fetch(url);
    const data: PokemonResponseName = await resp.json();

    const paths = data.results.map((pokemon: PokemonName) => ({
        params: { name: pokemon.name },
    })
    );

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { name } = ctx.params as { name: string };

    const pokemon = await getPokemonInfo(name);

    // const data = await resp.json();

    // const pokemon = {
    //     name: data.name,
    //     id: data.id,
    //     sprites: data.sprites,
    // }

    return {
        props: {
            pokemon
        }
    }
}

export default PokemonPorNombre;