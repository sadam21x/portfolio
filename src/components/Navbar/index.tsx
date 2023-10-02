import { useState, useEffect } from 'react'
import Link from 'next/link'
import { CgMenuRight } from 'react-icons/cg'
import SiteLogo from '@/components/SiteLogo'
import css from './styles.module.scss'

export default function Navbar() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  const [menus] = useState([
    { name: 'Home', href: '/' },
    { name: 'About Me', href: '/about-me' },
    { name: 'Projects', href: '/projects' },
  ])

  useEffect(() => {
    // Close mobile menu on screen resize
    window.addEventListener('resize', () => {
      setOpenMobileMenu(false)
    })

    // Close mobile menu on scroll
    window.addEventListener('scroll', () => {
      setOpenMobileMenu(false)
    })

    // Close mobile menu on click outside of it
    document.addEventListener('click', (e: any) => {
      if (!e.target.closest(`.${css.navbar}`)) {
        setOpenMobileMenu(false)
      }
    })
  }, [])

  return (
    <nav className={`${css.navbar} flex justify-between items-center font-poppins px-6 py-4 lg:px-32 lg:py-6`}>
      <SiteLogo />

      {/* Desktop Menu */}
      <div className='hidden items-center gap-x-8 lg:flex'>
        {menus.map((menu) => (
          <Link key={menu.name} href={menu.href} className={css.link}>
            {menu.name}
          </Link>
        ))}
      </div>
      {/* End of Desktop Menu */}

      {/* Mobile Menu Toggle */}
      <CgMenuRight
        onClick={() => setOpenMobileMenu(!openMobileMenu)}
        className='text-3xl cursor-pointer lg:hidden'
      />

      {/* Mobile Menu */}
      <div className={`${css['mobile-menu']} ${openMobileMenu ? css.active : ''}`}>
        <SiteLogo />
        
        {menus.map((menu) => (
          <Link key={menu.name} href={menu.href} className={css.link}>
            {menu.name}
          </Link>
        ))}
      </div>
      {/* End of Mobile Menu */}
    </nav>
  )
}
