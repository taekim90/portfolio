import '../styles/globals.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Navbar />

      <main>
        <Component {...pageProps} />
      </main>

      {/* <footer>
        © Tae Kim {new Date().getFullYear()}
      </footer> */}

      <Footer />
    </>
  )
}

export default MyApp
