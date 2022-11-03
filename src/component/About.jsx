import React from 'react'
import './About.css'
import ErrorBoundary from './ErrorBoundary'

const About = () => {
  return (
    <div className='about'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi voluptate nostrum hic at modi reprehenderit illum molestiae praesentium nam?

    <ErrorBoundary>
      <footer />
    </ErrorBoundary>
    </div>
  )
}

export default About