import { BiLogoGmail } from 'react-icons/bi'
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'
import ContactIcon from '@/partials/home/ContactIcon'

export default function Header() {
  const contacts = [
    {
      title: 'Email',
      icon: <BiLogoGmail className='w-auto h-8 lg:h-10' />,
      link: 'mailto:sadam21x@gmail.com',
    },
    {
      title: 'LinkedIn',
      icon: <FaLinkedin className='w-auto h-6 lg:h-8' />,
      link: 'https://www.linkedin.com/in/sadam21x',
    },
    {
      title: 'GitHub',
      icon: <FaGithub className='w-auto h-6 lg:h-8' />,
      link: 'https://github.com/sadam21x',
    },
    {
      title: 'Telegram',
      icon: <FaTelegram className='w-auto h-6 lg:h-8' />,
      link: 'https://t.me/sadam21x',
    },
  ]

  return (
    <>
      {/* Header Background */}
      <div className='w-full h-36 relative bg-gray-200 bg-home-header bg-cover bg-center bg-no-repeat rounded-lg lg:h-52' />

      <div className='relative z-[2] flex flex-col items-center -mt-16 px-4 lg:flex-row lg:-mt-24 lg:px-12'>
        {/* Avatar */}
        <div className='w-28 h-28 rounded-full bg-sky-800 border-2 border-white lg:w-48 lg:h-48'>
          <img
            src='https://www.gravatar.com/avatar/77028e9fca037b7dcea01d8220097fe9?s=500'
            alt='Avatar'
            className='w-full h-full rounded-full object-contain'
          />
        </div>

        <div className='font-semibold text-center mt-4 lg:text-left lg:ml-4 lg:mt-20'>
          <p className='text-2xl'>Sadam</p>
          <p className='text-lg text-primary'>Software Engineer</p>
        </div>

        <div className='flex items-center gap-4 mt-4 lg:ml-auto lg:mt-20'>
          {contacts.map((contact) => (
            <ContactIcon
              key={contact.title}
              title={contact.title}
              url={contact.link}
              icon={contact.icon}
            />
          ))}
        </div>
      </div>
    </>
  )
}
