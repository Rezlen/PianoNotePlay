import { Avatar, getImageListItemBarUtilityClass } from '@mui/material';
import React, {useState} from 'react'
import './MessageSender.css'
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';


// It has TWO section/Component: 1- MessageSender TOP and 2- MessageSender BOTTOM.
function MessageSender() {
 
  const [input, setInput] = useState(''); // This variable keep track of the what is being typed in the input.
  const [imageUrl, setImageUrl] = useState(''); // This variable keep track of the what URL being typed in the input.

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  
    // Database stuff here; AND to reset things after submitting.
    setInput('');
    setImageUrl('');
  
  };
  

  return (
    <div className='messageSender'>
      
      <div className='messageSender__top'> {/*Has TWO components as a form INPUT */}
        <Avatar />
        <form>

          <input 
            value={input} // this is the value of the input field, Keeps track of what is being typed in the INPUT filed
            onChange={(e) => setInput(e.target.value)} // this Keeps track of what is being typed in the INPUT filed
            className='messageSender__input'
            placeholder={`What's on Your mind?`}
          />

          <input 
            value={imageUrl} // this is the value of the input field, Keeps track of URL being typed in the INPUT filed
            onChange={(e) => setImageUrl(e.target.value)} // this Keeps track of URL being typed in the INPUT filed
            placeholder='Image URL (Optional)'
          />

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