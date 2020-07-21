import React, { useEffect, Suspense, lazy } from 'react'
import { useQuery } from 'hooks'
import { formatToKebabCase } from 'utils'

import './App.scss'

const Navbar = lazy(() => import(/* webpackChunkName: "navbar" */'components/navbar'))
const Footer = lazy(() => import(/* webpackChunkName: "footer" */'components/footer'))
const Header = lazy(() => import(/* webpackChunkName: "header" */'components/header'))
const AboutMe = lazy(() => import(/* webpackChunkName: "about-me" */'components/about-me'))
const Education = lazy(() => import(/* webpackChunkName: "education" */'components/education'))
const Portfolio = lazy(() => import(/* webpackChunkName: "porfolio" */'components/portfolio'))
const Skill = lazy(() => import(/* webpackChunkName: "skill" */'components/skill'))

const App = () => {
  const query = useQuery()
  const sectionQuery = query.get('section')
  const section = formatToKebabCase(sectionQuery)
  const elements = document.getElementsByClassName(section)
  const ref = elements && elements[0]

  useEffect(() => {
    if (!ref) return
    window.scrollTo({
      left: 0,
      top:  ref.offsetTop,
      behavior: 'smooth'
    })
  }, [ref])

  return (
    <div className='App'>
      <Suspense fallback={<div>Loading</div>}>
        <Navbar />
      </Suspense>
      <Suspense fallback={<div>Loading</div>}>
        <Header />
      </Suspense>
      <Suspense fallback={<div>Loading</div>}>
        <AboutMe />
      </Suspense>
      <Suspense fallback={<div>Loading</div>}>
        <Education />
      </Suspense>
      <Suspense fallback={<div>Loading</div>}>
        <Portfolio />
      </Suspense>
      <Suspense fallback={<div>Loading</div>}>
        <Skill />
      </Suspense>
      <Suspense fallback={<div>Loading</div>}>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
