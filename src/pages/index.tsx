import Layout from '@/layouts/Main'
import Header from '@/partials/home/Header'
import Brief from '@/partials/home/Brief'

export default function Home() {
  return (
    <Layout>
      <Header />
      <Brief className='mt-12' />
    </Layout>
  )
}
