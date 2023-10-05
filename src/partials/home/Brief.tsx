import { AiFillFileText } from 'react-icons/ai'

type Props = {
  className?: string
}

export default function Brief(props: Props) {
  return (
    <div className={props.className}>
      <h1 className='font-semibold text-2xl text-primary'>
        What I do?
      </h1>

      <p className='text-lg mt-2'>
        I specialize in full-stack web development,
        I can help you with your next project. From the
        initial idea to the final product.
        Whether it&apos;s a simple company profile or a complex web application
        with tons of features and daily users.
      </p>

      <a
        href='/download/Resume_Sadam.pdf'
        target='_blank'
        rel='noopener noreferrer'
        className='btn btn-primary mt-4'
      >
        <AiFillFileText className='text-lg' />
        Download My Resume
      </a>
    </div>
  )
}
