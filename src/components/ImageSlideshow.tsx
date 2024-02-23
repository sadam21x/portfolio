import { useEffect } from 'react'
import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

type Props = {
  images: {
    src: string
    caption: string
  }[]
  className?: string
}

export default function ImageSlideshow(props: Props) {
  useEffect(() => {
    Fancybox.bind('[data-fancybox]', {
      hideScrollbar: false,
    })
  }, [])

  return (
    <div className={`flex flex-wrap flex-col items-center gap-10 md:flex-row md:items-start md:gap-4 ${props.className}`}>
      {props.images.map((image, index) => (
        <a
          key={index}
          href={image.src}
          style={{ textDecoration: 'none' }}
          data-fancybox='gallery'
          data-caption={image.caption}
        >
          {index < 3 && (
            <img
              src={image.src}
              alt={image.caption}
              className='h-48 object-cover ring-2 ring-gray-300 rounded-md md:h-20'
            />
          )}

          {index === 3 && (
            <div className='relative'>
              <img
                src={image.src}
                alt={image.caption}
                className='h-48 object-cover ring-2 ring-gray-300 rounded-md md:h-20'
              />

              <div className='absolute inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70'>
                <div className='text-white text-xl font-semibold'>
                  +{props.images.length - 3}
                </div>
              </div>
            </div>
          )}
        </a>
      ))}
    </div>
  )
}
