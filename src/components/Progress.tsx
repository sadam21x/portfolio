type Props = {
  loading: boolean
}

export default function Progress(props: Props) {
  return (
    <progress
      className={`${
        props.loading ? 'visible' : 'invisible'
      } block progress w-screen`}
    />
  )
}
