import React, { useContext } from 'react'
import Header from '../components/Header'
import  Pokemon from '../typing/PokemonTyping';
import { useSelector, useDispatch } from "react-redux";
import { setDeck } from '../features/deck/deck-slice';
import Image from 'next/image';




const Deck: React.FC = () => {
    //Define Deck and Dispatch for Redux
    const deck = useSelector((state: Pokemon) => state.deck.deck);
    const dispatch = useDispatch();
    let totalExperience = 0;

    //Remove a pokemon from the deck
    const removeToDeck = (pokemon: Pokemon) => {
        const newDeck = deck.filter((item: Pokemon) => item.id !== pokemon.id)
        dispatch(setDeck(newDeck))
    }

    return (
        <div className='bg-black h-screen w-screen text-white list-none	overflow-y-scroll px-10'>
            <Header />
            {deck && deck.map((pokemon: Pokemon, index: string) => {
                totalExperience += pokemon.base_experience
                return (
                    <div className='flex items-center justify-between flex-row uppercase' key={pokemon.id}>
                        {pokemon.sprites.front_default !== null && <Image src={pokemon.sprites.front_default} width={100} height={100} alt={pokemon.name} />}
                        <li>{pokemon.name}</li>
                        <li>{pokemon.base_experience}</li>
                        <li>{pokemon.types[0].type.name}</li>
                        <ul>
                            {pokemon.abilities.map(ability => (
                                <li key={ability.ability.name}>{ability.ability.name}</li>
                            ))}
                        </ul>
                        <ul>
                            {pokemon.types.map(type => (
                                <li key={type.type.name}>{type.type.name}</li>
                            ))}
                        </ul>
                        <button className='bg-red-500 p-2 rounded' onClick={() => removeToDeck(pokemon)}>Remove from team</button>
                    </div>
                );
            })
            }
            <div>Total Experience: {totalExperience}</div>
        </div>
    )
}

export default Deck