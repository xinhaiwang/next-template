import { MantineProvider } from '@mantine/core'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {

  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{colorScheme: "light"}}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}
