import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Header from './components/Header';
import { Pokemon } from './typing/PokemonTyping'


const Pikachussr: React.FC = () => {

    const [pikachuData, setPikachuData] = useState<Pokemon>({} as Pokemon);

    //Get data from API and set it to data
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
            .then((response) => {
                setPikachuData(response.data);
                console.log(pikachuData)
            });
    }, []);


    return (
        <div className='bg-black h-screen w-screen text-white'>
            <Header />
            {pikachuData &&
                <div className='flex justify-center items-center flex-col text-center'>
                    <h1 className='uppercase'>{pikachuData.name}</h1>
                    <img src={pikachuData.sprites?.front_default} className="w-[300px] h-[300px]object-contain" alt={pikachuData.name} />
                    <p>Base Experience: {pikachuData.base_experience}</p>
                    <h2>Types:</h2>
                    <ul>
                        {pikachuData.types?.map(type => (
                            <li>{type.type.name}</li>
                        ))}
                    </ul>
                    <h2>Abilities:</h2>
                    <ul>
                        {pikachuData.abilities?.map(ability => (
                            <li>{ability.ability.name}</li>
                        ))}
                    </ul>
                    {/* Add more information about Pikachu */}
                    <p>Generated at: {new Date().toString()}</p>
                </div>
            }
        </div>
    )
}


//SSR - Server Side Rendering
export const getServerSideProps = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu');
    return {
        props: {
            data: response.data,
        },
    };
};

export default Pikachussr