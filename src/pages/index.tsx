import type { GetStaticProps } from 'next'
import type { Project } from '@/lib/types'
import { getProjects } from '@/lib/helpers'
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
      <Brief />
      <Projects projects={props.projects} />
    </Layout>
  )
}
