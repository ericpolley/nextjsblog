
import Head from 'next/head';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <div>
        
        <>
        <Head>
           
        </Head>
        <header>
        <Navbar />

        </header>
        <main>
        <Component {...pageProps} />
        </main>
        </>
    </div>
  )
}

export default App