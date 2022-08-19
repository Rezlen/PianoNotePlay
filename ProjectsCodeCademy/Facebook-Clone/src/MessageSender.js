import { Avatar } from '@mui/material';
import React from 'react'
import './MessageSender.css'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';


// It has TWO section/Component: 1- MessageSender TOP and 2- MessageSender BOTTOM.
function MessageSender() {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };
  

  return (
    <div className='messageSender'>
      
      <div className='messageSender__top'> {/*Has TWO components as a form INPUT */}
        <Avatar />
        <form>
          <input 
            className='messageSender__input'
            placeholder={`WHat's on Your mind`}
          />
          <input placeholder='Image URL (Optional)'/>
          <button onClick= {handleSubmit} type='submit'>
            Hidden Submit
          </button>
        </form>
      </div>

      <div className='messageSender__bottom'> {/*Has THREE components: Video, Photo, Icons */}
        <div className='messageSender__option'>
          <VideocamIcon style={{color: 'red'}} />
          <h3>Live Video</h3>
        </div>
        <div className='messageSender__option'>
          <PhotoLibraryIcon style={{color: 'green'}} />
          <h3>Photo/Video</h3>
        </div>
        <div className='messageSender__option'>
          <InsertEmoticonIcon style={{color: 'orange'}} />
          <h3>Feeling/Activity</h3>
        </div>

      </div>

    </div>
  )
}

export default MessageSender;