import Head from 'next/head'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ScrollToTop from '@/components/ScrollToTop'

type Props = {
  children: React.ReactNode
  meta?: {
    title?: string
    description?: string
    keywords?: string
  }
}

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
}

export default function MainLayout(props: Props) {
  const title = props.meta?.title
    ? `${props.meta.title} | Sadam Portfolio`
    : 'Sadam Portfolio'
  const description = props.meta?.description || "Sadam's personal website"
  const keywords =
    props.meta?.keywords ||
    'Sadam, Software Engineer, Web Developer, Cloud, Bali, Indonesia'

  return (
    <>
      <Head>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <title>{title}</title>
      </Head>

      <div className='relative max-w-[1920px] min-h-screen font-rubik mx-auto'>
        <Navbar />
        <motion.main
          initial='hidden'
          animate='enter'
          exit='exit'
          variants={variants}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className='px-6 pb-20 mt-8 lg:px-32 lg:pb-24 lg:mt-16'>
          {props.children}
        </motion.main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  )
}
