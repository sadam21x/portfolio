import type { GetStaticPaths, GetStaticProps } from 'next'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import type { Project } from '@/lib/types'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { getSlugs, findProject } from '@/lib/helpers'
import Layout from '@/layouts/Project'
import ImageSlideshow from '@/components/ImageSlideshow'

type Params = {
  slug: string
}

type Props = {
  project: Project
  source: MDXRemoteSerializeResult
}

const components = {
  ImageSlideshow,
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getSlugs()
  const paths = slugs.map((slug: string) => ({
    params: { slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  if (params) {
    const project = await findProject(params.slug)

    if (!project) {
      return {
        notFound: true,
      }
    }

    const source = await serialize(project.content)

    return {
      props: {
        project,
        source,
      },
    }
  } else {
    return { notFound: true }
  }
}

export default function Project(props: Props) {
  return (
    <Layout project={props.project}>
      <MDXRemote {...props.source} components={components} />
    </Layout>
  )
}
