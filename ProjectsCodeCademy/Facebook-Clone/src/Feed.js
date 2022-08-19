import React from 'react'
import './Feed.css'
import StoryReel from './StoryReel';

// this component cover the middle section of the age which includes two sections: 1- Displaying the StoryReels and 2- Displaying the Posts/message sender
function Feed() {
  return (
    <div className='feed'>
      <StoryReel />
      {/*MessageSender*/}

    </div>
  )
}

export default Feed;