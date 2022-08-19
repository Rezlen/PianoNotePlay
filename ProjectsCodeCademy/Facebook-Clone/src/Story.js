import { Avatar } from '@mui/material'
import React from 'react'
import './Story.css'

// to make it cleaner, instead of argument (props) and props.title, we just use {title & the rest of the props}
function Story({image, profileSrc, title}) {
  return (
    <div style={{backgroundImage: `url(${image})`}} className='story'> {/**Exceptionally we use inline styling here */}
      <Avatar className='story__avatar' src={profileSrc} /> {/*if there is src, then pass it Avatar with the ProfileSrc */}
      <h4>{title}</h4>
    </div>
  )
}

export default Story;