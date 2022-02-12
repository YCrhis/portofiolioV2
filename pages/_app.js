import Content from '../components/layouts/Content'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Content>
      <Component {...pageProps} />
    </Content>
  )
}

export default MyApp
