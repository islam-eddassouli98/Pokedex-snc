//Import of libraries
import React, { useState, useEffect,useContext } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from "react-redux";
import { setDeck } from '../features/deck/deck-slice';
import { Pokemon,PokemonList } from '../typing/PokemonTyping'

const Search: React.FC = () => {
    //Define States
    const [searchWord, setSearchWord] = useState<string>('')
    const [pokemon, setPokemon] = useState<PokemonList[]>([])
    const [pokemonData, setPokemonData] = useState<Pokemon[]>([])
    const [pokemonList, setPokemonList] = useState<PokemonList[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<any>('')
    //Define Deck and Dispatch for Redux
    let deck = useSelector((state: Pokemon) => state.deck.deck);
    const dispatch = useDispatch();


    //Define useEffect for the list of a pokemon because the API doesn't permit to search by trunk word
    useEffect(() => {
        const fetchPokemon = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1500');
            const data = await response.json();
            setPokemonList(data.results);
        }
        fetchPokemon();
    }, [])

    //Define useEffect for the search of a pokemon
    useEffect(() => {
        if (searchWord.length >= 3) {
            setPokemon(pokemonList.filter(pokemon => pokemon.name.includes(searchWord)));
        } else {
            setPokemon([])
        }
    }, [searchWord])

    //Define useEffect for the data of a pokemon
    useEffect(() => {
        const fetchPokemon = async () => {
            setLoading(true)
            try {
                const pokemons = await Promise.all(
                    pokemon.map(async (pokemon) => {
                        const response = await axios.get(pokemon.url);
                        return response.data;
                    })
                );
                setPokemonData(pokemons);
            } catch (error) {
                setError(error)
            }
            setLoading(false)
        }
        fetchPokemon();
    }, [pokemon])

    //Function add to the deckContext
    const addToDeck = (pokemon: Pokemon) => {
        //check if the pokemon is present in the deck
        const isPresent = deck.find((item: Pokemon) => item.id === pokemon.id);
        if(!isPresent){
            deck = [...deck, pokemon]
            if (deck.length > 10) {
                deck.splice(0, 1);
              }
            dispatch(setDeck(deck));
        }else{
            alert('This pokemon is already in your deck')
        }
            
    };    

    return (
        <div className='w-screen h-screen overflow-y-scroll'>
            <form className='p-5 flex justify-center items-center text-white mx-10'>
                <input className='bg-gray-700 p-5 rounded' type="text" value={searchWord} onChange={(e) => setSearchWord(e.target.value)} />
            </form>
            <div className='text-white flex mx-4 overflow-y-scroll'>
                <ul className='w-full h-full'>
                    {error && <p>{error}</p>}
                    {loading && <p>Loading...</p>}
                    {pokemonData.map((pokemon) => (
                        <div className='flex items-center justify-between flex-row uppercase' key={pokemon.id}>
                            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                            <li>{pokemon.name}</li>
                            <li>{pokemon.base_experience}</li>
                            <li>{pokemon.types[0].type.name}</li>
                            <ul>
                                {pokemon.abilities.map(ability => (
                                    <li>{ability.ability.name}</li>
                                ))}
                            </ul>
                            <ul>
                                {pokemon.types.map(type => (
                                    <li>{type.type.name}</li>
                                ))}
                            </ul>
                            <button className='bg-red-500 p-2 rounded' onClick={() => addToDeck(pokemon)}>Add to team</button>
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Search