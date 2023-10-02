import crypto from 'crypto-js'

export default function Avatar() {
  const gravatarUrl = `https://www.gravatar.com/avatar/${crypto.MD5('sadam21x@gmail.com').toString()}?s=500`

  return (
    <div className='w-28 h-28 rounded-full bg-sky-800 border-2 border-white lg:w-48 lg:h-48'>
      <img
        src={gravatarUrl}
        alt='Avatar'
        className='w-full h-full rounded-full object-contain'
      />
    </div>
  )
}
