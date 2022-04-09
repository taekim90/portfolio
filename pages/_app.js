import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  <>
    <Navbar />

    <main>
      <Component {...pageProps} />
    </main>

    <footer>
      © Tae Kim {new Date().getFullYear()}
    </footer>
  </>
}

export default MyApp
