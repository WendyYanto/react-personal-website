import React from 'react'
import { useMediaQuery } from 'react-responsive'

const withResponsive = (Component) => (props) => {
  const isMobile = useMediaQuery({ maxWidth: 540 })
  const isTablet = useMediaQuery({ maxWidth: 768 })

  return (
    <Component
      {...props} 
      isMobile={isMobile} 
      isTablet={isTablet}
    />
  )
}

export default withResponsive
