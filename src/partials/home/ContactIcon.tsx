type Props = {
  title: string
  url: string
  icon: React.ReactNode
}

export default function ContactIcon(props: Props) {
  return (
    <a
      href={props.url}
      target='_blank'
      rel='noreferrer'
      className='tooltip'
      data-tip={props.title}
    >
      {props.icon}
    </a>
  )
}
