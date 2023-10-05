import { useState, useEffect } from 'react'
import { BsFillRocketFill } from 'react-icons/bs'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    window.scrollY > 100 ? setIsVisible(true) : setIsVisible(false)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div
      className={`${
        isVisible ? 'block' : 'hidden'
      } fixed bottom-8 right-4 cursor-pointer lg:bottom-6 lg:right-8`}
      onClick={scrollToTop}>
      <BsFillRocketFill className='w-8 h-auto lg:w-10' />
    </div>
  )
}
