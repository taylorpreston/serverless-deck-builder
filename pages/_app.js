import '../styles/globals.css'
import { NextUIProvider, createTheme } from '@nextui-org/react';

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      black: "#111"
    }
  }
});
const lightTheme = createTheme({
  type: 'dark',
});


function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider 
      theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp
