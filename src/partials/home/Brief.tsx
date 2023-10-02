type Props = {
  className?: string
}

export default function Brief(props: Props) {
  return (
    <div className={props.className}>
      <h1 className='font-semibold text-2xl text-blue-800'>
        What I do?
      </h1>

      <p className='text-lg'>
        I specialize in full-stack web development,
        I can help you with your next project. From the
        initial idea to the final product.
        Whether it&apos;s a simple company profile or a complex web application
        with tons of features and daily users.
      </p>
    </div>
  )
}
