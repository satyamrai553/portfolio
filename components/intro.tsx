import Image from 'next/image'
import authorImage from '@/public/images/authors/satyam.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 pb-24 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title no-underline'>Hey, I&#39;m Satyam.</h1>
        <p className='mt-3 font-light text-muted-foreground'>
          I&#39;m a full-stack developer passionate about backend technologies and building scalable applications. I love exploring new tech and solving complex problems.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale object-fill'
          src={authorImage}
          alt='Satyam Rai'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}

