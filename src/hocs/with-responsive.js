import React from 'react'
import { useMediaQuery } from 'react-responsive'

const withResponsive = Component => props => {
  const isMobile = useMediaQuery({ maxWidth: 540 })
  return <Component {...props } isMobile={isMobile} />;
}

export default withResponsive