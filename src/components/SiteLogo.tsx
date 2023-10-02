import Image from 'next/image'
import Link from 'next/link'

export default function SiteLogo() {
  return (
    <Link href='/' className='flex items-center gap-2 text-lg font-semibold lg:text-xl'>
      <Image src='/assets/site-logo.png' width={20} height={20} alt='Site Logo' />
      Sadam
    </Link>
  )
}
