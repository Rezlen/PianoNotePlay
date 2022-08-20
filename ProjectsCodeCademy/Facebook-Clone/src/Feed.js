import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

// this component cover the middle section of the age which includes two sections: 1- Displaying the StoryReels and 2- Displaying the Posts/message sender
function Feed() {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />

      <Post 
        profilePic='https://scontent.flhr13-1.fna.fbcdn.net/v/t1.18169-9/18921941_1464661213555449_8406490878265591879_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rdTaUapa-yAAX_bl1pE&_nc_ht=scontent.flhr13-1.fna&oh=00_AT8-JnwcVI_8vsI7RTENH4dtSDVVqof-pvzSBRK_CQB6sw&oe=6325BFF9'
        message='Wow this works'
        timestamp='This is the time stamp'
        username={'John'}
        image='https://scontent.flhr13-1.fna.fbcdn.net/v/t39.30808-6/211859445_10158300571710872_1739945872121343798_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lO-7SGBYeBgAX_nVZ98&_nc_oc=AQlbMBQSYcahDre9hkbvCaMZlVuXMmsqQG6cs-1RuxO9eVJXkld4Gzt3gpQS_zwUeUo&_nc_ht=scontent.flhr13-1.fna&oh=00_AT90ioUB0QDNYKOprfAPvVnBhJSkIlnXhfL7FPSKoCiDmg&oe=63056690'
        />
      
      <Post 
        profilePic='https://scontent.flhr13-1.fna.fbcdn.net/v/t1.6435-9/71174257_10219137739930243_3997180261132402688_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=ddQ-pAIdwDEAX9mDh0q&_nc_ht=scontent.flhr13-1.fna&oh=00_AT-ObuFKOCG2o6iUZZPCT0dzHYgfMMV7I_bYQrjdYk18Kw&oe=63252ECE'
        message='Wow this works'
        timestamp='This is the time stamp'
        username={'John'}
        image='https://scontent.flhr13-1.fna.fbcdn.net/v/t39.30808-6/211859445_10158300571710872_1739945872121343798_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lO-7SGBYeBgAX_nVZ98&_nc_oc=AQlbMBQSYcahDre9hkbvCaMZlVuXMmsqQG6cs-1RuxO9eVJXkld4Gzt3gpQS_zwUeUo&_nc_ht=scontent.flhr13-1.fna&oh=00_AT90ioUB0QDNYKOprfAPvVnBhJSkIlnXhfL7FPSKoCiDmg&oe=63056690'
      />
      
      <Post 
        profilePic='https://scontent.flhr13-1.fna.fbcdn.net/v/t39.30808-6/211859445_10158300571710872_1739945872121343798_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lO-7SGBYeBgAX_nVZ98&_nc_oc=AQlbMBQSYcahDre9hkbvCaMZlVuXMmsqQG6cs-1RuxO9eVJXkld4Gzt3gpQS_zwUeUo&_nc_ht=scontent.flhr13-1.fna&oh=00_AT90ioUB0QDNYKOprfAPvVnBhJSkIlnXhfL7FPSKoCiDmg&oe=63056690'
        message='Wow this works'
        timestamp='This is the time stamp'
        username={'John'}
        image='https://scontent.flhr13-1.fna.fbcdn.net/v/t39.30808-6/218400731_10158325745745872_2003760177350147711_n.jpg?stp=dst-jpg_p180x540&_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=-8o80g7O9HIAX9eU2_K&_nc_ht=scontent.flhr13-1.fna&oh=00_AT-IIUE0mWa0b8ZI-8FSmiuYzX_KrFAw6KG7bLIEnAy2Gg&oe=6305F4BA'
      />
      
    </div>
  )
}

export default Feed;