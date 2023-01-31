import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../store/store'
export default function App({ Component, pageProps }: AppProps) {
  return (
    //Wrap redux provider around the app
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>

  )
}
