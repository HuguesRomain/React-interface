import React, { Fragment, Component } from 'react'; 
import LogoApp from './LogoApp'
import NameApp from './NameApp'
import '../App.css'

const Element = ({}) => {
  return(
    <div className="appElements">
    <LogoApp />
    <NameApp />
    </div>
  )
}

export default Element


