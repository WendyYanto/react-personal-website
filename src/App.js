import React, { useEffect } from 'react'
import Navbar from 'components/navbar'
import Footer from 'components/footer'
import Header from 'components/header'
import AboutMe from 'components/about-me'
import Education from 'components/education'
import { useQuery } from 'hooks'
import { formatToKebabCase } from 'utils'

import './App.scss'

const App = () => {
  const query = useQuery()
  const sectionQuery = query.get('section')
  const section = formatToKebabCase(sectionQuery)
  const elements = document.getElementsByClassName(section)
  const ref = elements && elements[0]

  useEffect(() => {
    if (!ref) return
    window.scrollTo(0, ref.offsetTop)
  }, [ref])

  return (
    <div className='App'>
      <Navbar />
      <Header />
      <AboutMe />
      <Education />
      <Footer />
    </div>
  )
}

export default App
