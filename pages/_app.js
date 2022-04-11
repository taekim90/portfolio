import '../styles/globals.css'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
// import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Navbar />

      <main>
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  )
}

export default MyApp
