import '../styles/globals.css'
import {Navbar} from "../components/navbar/navbar";

function MyApp({ Component, pageProps }) {
  return <Navbar>
    <Component {...pageProps} />
  </Navbar>
}

export default MyApp
