import type { GetStaticProps } from 'next'
import type { Project } from '@/lib/types'
import Link from 'next/link'
import { getProjects } from '@/lib/helpers'
import Layout from '@/layouts/Main'
import ProjectCard from '@/components/ProjectCard'

type Props = {
  projects: Project[]
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const projects = await getProjects()
  projects.sort((a: any, b: any) => (a.order > b.order ? 1 : -1))

  return {
    props: {
      projects,
    },
  }
}

export default function Projects(props: Props) {
  const meta = {
    title: 'Projects',
  }

  return (
    <Layout meta={meta}>
      <h1 className='font-semibold text-primary text-xl lg:text-2xl'>Projects</h1>
      <hr className='my-4' />
      <p className='text-base lg:text-lg'>Check out some of my works</p>

      <div className='flex flex-col flex-wrap gap-x-4 gap-y-8 mt-6 lg:flex-row'>
        {props.projects.map((project) => (
          <Link
            key={project.title}
            href={`projects/${project.slug}`}
            className='flex'>
            <ProjectCard
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          </Link>
        ))}
      </div>
    </Layout>
  )
}
