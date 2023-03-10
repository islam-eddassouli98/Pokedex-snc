import Head from 'next/head'
import Header from '../components/Header'
import Search from '../components/Search'


export default function Home() {
  //Home Page that contain Search Component because the home page will be the search page
  return (
    <div className='bg-black h-screen w-screen'>
      <Head>
        <title>Pokedex</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Search />
      </main>
    </div>
  )
}
