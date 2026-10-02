import { About } from '@/components/portfolio/about'
import { Contact } from '@/components/portfolio/contact'
import { Footer } from '@/components/portfolio/footer'
import { Header } from '@/components/portfolio/header'
import { Hero } from '@/components/portfolio/hero'
import { Projects } from '@/components/portfolio/projects'
import { Works } from '@/components/portfolio/works'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Works />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
