import type { Project } from '@/types/project'
import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'

type Props = {
  className?: string
  projects: Project[]
}

export default function Projects(props: Props) {
  return (
    <div className={props.className}>
      <h1 className='font-semibold text-2xl text-primary'>
        Featured Projects
      </h1>

      <p className='mt-2'>
        Check out some of my works
        <span className='mx-2'>|</span>
        <Link href='/projects' className='font-semibold text-primary hover:underline'>
          View all projects
        </Link>
      </p>

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
    </div>
  )
}
