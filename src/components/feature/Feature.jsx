import React from 'react'
import './feature.css';

const Feature = ({ title, text }) => {
  return (
    <div className='gpt3__features-container_feature'>
      <div className='gpt3__features-container_feature-title'>
        <div />
        <h3>{ title }</h3>
      </div>
      <div className='gpt3__features-container_feature-text'>
        <p>{ text }</p>
      </div>
    </div>
  )
}

export default Feature
