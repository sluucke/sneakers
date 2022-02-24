import { AppProps } from 'next/dist/shared/lib/router/router'
import React from 'react'
import '../styles/base.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
