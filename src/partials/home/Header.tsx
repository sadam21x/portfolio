import { FaGithubAlt, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { MdAlternateEmail } from 'react-icons/md'
import HeaderBackground from '@/partials/home/HeaderBackground'
import Avatar from '@/partials/home/Avatar'
import ContactIcon from '@/partials/home/ContactIcon'

export default function Header() {
  const contacts = [
    {
      title: 'Email',
      icon: <MdAlternateEmail className='w-auto h-6 lg:h-8' />,
      link: 'mailto:sadam21x@gmail.com',
    },
    {
      title: 'LinkedIn',
      icon: <FaLinkedin className='w-auto h-6 lg:h-8' />,
      link: 'https://www.linkedin.com/in/sadam21x',
    },
    {
      title: 'GitHub',
      icon: <FaGithubAlt className='w-auto h-6 lg:h-8' />,
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
      <HeaderBackground />
      <div className='relative z-[2] flex flex-col items-center -mt-16 px-4 lg:flex-row lg:-mt-24 lg:px-12'>
        <Avatar />

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
