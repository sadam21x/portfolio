import Layout from '@/layouts/Main'

export default function About() {
  const meta = { title: 'About Me' }
  
  return (
    <Layout meta={meta}>
      <article className='prose max-w-none prose-headings:mb-2'>
        <h2 className='text-primary'>
          Hola! I&apos;m Sadam 👋
        </h2>

        <p>
          A guy who loves coding and coffee. I&apos;m a software engineer based in the beautiful island of Bali 🏝️
        </p>

        <h2 className='text-primary'>
          My Background
        </h2>

        <p>
          I embarked on my coding journey at the age of 14. Back then,
          I wrote my first HTML code on Blogspot using my old Nokia 5130 XpressMusic.
          Since then, I&apos;ve been passionate about programming and committed to exploring
          more about it.
        </p>

        <p>
          I received my first laptop at the age of 15, which fueled my passion even further.
          My first <strong>&quot;real&quot;</strong> programming language was PASCAL,
          which I learned during my senior high school years.
          I joined a programming extracurricular class and participated in some regional
          programming competitions here in Bali, even though I didn&quot;t win any of them. 😁
        </p>

        <p>
          My professional journey began in 2020 when I worked on real-world projects as a freelance web developer during my college years.
        </p>

        <p>
          In early 2022, I graduated from Universitas Airlangga with an
          Associate Degree in Information System and landed my first job a few
          months later.
        </p>
        
        <h2 className='text-primary'>
          What&apos;s next?
        </h2>

        <p>
          It has been nine years since I started my coding journey,
          and I have chosen web development as my career path. However,
          I remain open to learning new things and exploring new technologies.
        </p>
      </article>
    </Layout>
  )
}
