import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import Router from 'next/router'
import nProgress from 'nprogress'
import '@/styles/globals.css'
import '@/styles/scrollbar.css'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Router.events.on('routeChangeStart', () => nProgress.start())
    Router.events.on('routeChangeComplete', () => nProgress.done())
    Router.events.on('routeChangeError', () => nProgress.done())
  }, [])

  return (
    <div className='bg-[#F5F5F5]'>
      <Component {...pageProps} />
    </div>
  )
}
