
export const getPokemonInfo = async (parametro: string) => {

    const url = `https://pokeapi.co/api/v2/pokemon/${parametro}`;
    const resp = await fetch(url);
    const { base_experience, abilities, forms, game_indices, height, held_items, is_default, location_area_encounters, moves, order, past_types, species, stats, types, weight, ...pokemon } = await resp.json();

    return pokemon;
}