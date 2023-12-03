import type { Project } from '@/lib/types'
import { BiGlobe } from 'react-icons/bi'
import { CgOrganisation } from 'react-icons/cg'
import { FaGithub, FaLink } from 'react-icons/fa'
import Layout from '@/layouts/Main'

type Props = {
  project: Project
  children: React.ReactNode
}

export default function ProjectLayout(props: Props) {
  const meta = {
    title: props.project.title,
  }

  return (
    <Layout meta={meta}>
      <h1 className='font-bold text-primary text-xl lg:text-2xl'>{props.project.title}</h1>
      <p className='mt-4'>{props.project.description}</p>

      <div className='flex flex-wrap items-center gap-x-6 gap-y-4 mt-8'>
        <a href={props.project.repository} target='_blank' className={`${props.project.repository ? 'hover:underline' : 'cursor-not-allowed'} flex flex-wrap items-center gap-2`}>
          <FaGithub className='text-xl' />
          <p className='text-lg'>Repository</p>
        </a>
        
        <a href={props.project.url} target='_blank' className={`${props.project.url ? 'hover:underline' : 'cursor-not-allowed'} flex flex-wrap items-center gap-2`}>
          <BiGlobe className='text-xl' />
          <p className='text-lg'>Live URL</p>
        </a>
        
        <a href={props.project.org.url} target='_blank' className={`${props.project.org.url ? 'hover:underline' : 'cursor-not-allowed'} flex flex-wrap items-center gap-2`}>
          <CgOrganisation className='text-xl' />
          <p className='text-lg'>{props.project.org.name}</p>
        </a>
      </div>

      <hr className='mt-4 mb-8' />

      <article className='prose max-w-none'>
        {props.children}
      </article>
    </Layout>
  )
}
