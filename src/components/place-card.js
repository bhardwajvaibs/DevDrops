import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import OutlineButton from './outline-button'
import './place-card.css'

const PlaceCard = (props) => {
  return (
    <div className={`place-card-container1 ${props.rootClassName} `}>
      <div className="place-card-container2">
        {/* <span className="place-card-text1">{props.city}</span> */}
         <a
    href={props.repoUrl}
    className="place-card-link"
    target="_blank"
    rel="noopener noreferrer"
  >
    {props.city}
  </a>

  {/* Tags list */}
  {props.techStack && (
    <div className="tech-tags-container">
      {props.techStack.map((tech, index) => (
        <span key={index} className="tech-tag">
          {tech}
        </span>
      ))}
    </div>
  )}
        <span className="place-card-text2">
          {props.text ?? (
            <Fragment>
              <span className="place-card-text3">
                This is a realtime chat application. Built to communicate
                easily 
              </span>
            </Fragment>
          )}
        </span>
         {props.showButton && (
         
        <OutlineButton
          button1="↓ Download .apk"
          rootClassName="outline-buttonroot-class-name"
            apkUrl={props.apkUrl}
        ></OutlineButton>
        
         )}
      </div>
    </div>
  )
}

PlaceCard.defaultProps = {
  rootClassName: '',
  text: undefined,
  city: 'Vibe',
}

PlaceCard.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.element,
  city: PropTypes.string,
}

export default PlaceCard
