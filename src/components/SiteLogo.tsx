import Link from 'next/link'

export default function SiteLogo() {
  return (
    <Link href='/' className='flex items-center gap-2 text-lg font-semibold lg:text-xl'>
      <img src='/assets/logo/site-logo.png' alt='Site Logo' className='h-6' />
      Sadam
    </Link>
  )
}
