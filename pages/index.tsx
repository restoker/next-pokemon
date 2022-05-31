import type { NextPage, GetStaticProps } from 'next'
import Layout from '../components/layouts/Layout'
import { PokemonList, Pokemon } from '../interfaces/pokemon-list';
import PokemonCard from '../components/pokemon';
import { Fragment } from 'react';

interface Props {
  pokemons: Pokemon[],
  children?: React.ReactNode | undefined | JSX.Element | JSX.Element[]
}

const Home: NextPage<Props> = ({ pokemons }) => {
  // console.log(pokemons);
  return (
    <Layout titulo='Home' href='/'>
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-16 mx-auto">
        {pokemons.map((pokemon) => (
          <Fragment key={pokemon.id}>
            <PokemonCard pokemon={pokemon} />
          </Fragment>
        ))}
      </ul>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';
  const resp = await fetch(url);
  const data: PokemonList = await resp.json();

  const pokemons: Pokemon[] = data.results.map((pokemon, i) => {
    return {
      ...pokemon,
      id: `${i + 1}`,
      // imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`,
      imagen: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${i + 1}.png`,
    }
  });
  // console.log(data);
  return {
    props: {
      pokemons
    }
  }
}

export default Home
