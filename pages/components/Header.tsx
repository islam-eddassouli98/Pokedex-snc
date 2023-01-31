import React from 'react'
import Link from 'next/link';
import { useSelector } from 'react-redux';

//Create Header component
const Header: React.FC = () => {
  //Define Deck from redux for the numbers of pokemon in the deck
  const deck = useSelector((state: any) => state.deck.deck);
  return (
    <div className='h-[90px] bg-black  '>
      <div className='flex justify-between items-center h-full text-white mx-10'>
        <div className='flex justify-center items-center flex-row flex-1'>
          <Link  href="/deck">
            <div className='flex-row'>My Deck </div>
          </Link>
          <div className='w-5 h-5 bg-red-500 flex justify-center items-center rounded mx-2'>{deck.length}</div>
        </div>
        <div className='flex justify-center items-center flex-[2]'>
          <Link  href="/">
            <img src={'https://i.pinimg.com/originals/bd/cd/20/bdcd20f5411ee5785889542d303ad4cb.png'} className="w-[150px] m-auto" alt=""></img>
          </Link>
        </div>
        <div className='flex justify-center items-center flex-1 '>
          <Link  href="/pikachussg">
            <h2 className='p-2'> Pikachu (SSG) </h2>
          </Link>
          <Link  href="/pikachussr">
            <h2 className='p-2'>Pikachu (SSR)</h2>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header