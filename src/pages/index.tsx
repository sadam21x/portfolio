import type { GetStaticProps } from 'next'
import type { Project } from '@/types/project'
import { getProjects } from '@/utils/project'
import Layout from '@/layouts/Main'
import Header from '@/partials/home/Header'
import Brief from '@/partials/home/Brief'
import Projects from '@/partials/home/Projects'

type Props = {
  projects: Project[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = await getProjects()
  projects.sort((a: any, b: any) => (a.order > b.order ? 1 : -1))

  return {
    props: {
      projects: projects.filter((project) => project.featured),
    }
  }
}

export default function Home(props: Props) {
  return (
    <Layout>
      <Header />
      <Brief className='mt-12' />
      <Projects projects={props.projects} className='mt-12' />
    </Layout>
  )
}
