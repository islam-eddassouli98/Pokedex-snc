//Define Interface Pokemon
export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    abilities: Array<{ ability: { name: string } }>;
    types: Array<{
        name: string; type: { name: string }
    }>;
    sprites: {
        front_default: string;
    };
    deck: any;
}
//Define Interface PokemonList
export interface PokemonList {
    name: string;
    url: string;
}