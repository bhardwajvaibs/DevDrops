import React from 'react'

import PropTypes from 'prop-types'

import './outline-button.css'

const OutlineButton = (props) => {
  return (
    <div className={`outline-button-container ${props.rootClassName} `}>
     <a href={props.apkUrl} download>  <button className="outline-button-button button" >{props.button1}</button>
     </a>
    </div>
  )
}

OutlineButton.defaultProps = {
  rootClassName: '',
  button1: 'Button',
   apkUrl: null
}

OutlineButton.propTypes = {
  rootClassName: PropTypes.string,
  button1: PropTypes.string,
  apkUrl: PropTypes.string
}

export default OutlineButton
