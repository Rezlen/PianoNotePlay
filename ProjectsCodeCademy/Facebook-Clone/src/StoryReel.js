import React from 'react'
import Story from './Story';
import './StoryReel.css'

// each one of people in the StoryReel is a component for itself as well.
function StoryReel() {
  return (
    <div className='storyReel'>
      <Story 
        image='https://scontent.flhr13-1.fna.fbcdn.net/v/t39.30808-6/300008803_10167037696405093_5549396157843549944_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5b7eaf&_nc_ohc=dNCS1QI0WJIAX9JJaQR&_nc_ht=scontent.flhr13-1.fna&oh=00_AT-VDXUqi3uTnC-ZxUYpJXhtXGSBmflUjWrzNG9agW3rZQ&oe=6303B317'
        profileSrc='https://scontent.flhr13-1.fna.fbcdn.net/v/t39.30808-6/292555429_10160110189064084_1977402169948235867_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=jATvVO31ICQAX-cnveG&_nc_ht=scontent.flhr13-1.fna&oh=00_AT9yBtCLJqKqDTtpC0VuGRN_KBbksf31nP-xJx6Hzc8Yaw&oe=63055884'
        title='Viana Sol'
      />
      <Story 
        image='https://scontent.flhr13-1.fna.fbcdn.net/v/t39.30808-6/300370115_10166588032970298_8841079152900250530_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=102&ccb=1-7&_nc_sid=5b7eaf&_nc_ohc=m-D6cG3zyXIAX84vgoa&_nc_ht=scontent.flhr13-1.fna&oh=00_AT-kugBH9HMCZj4vAxE45xQxP_r5kcOawnv8hfL2Td7uJw&oe=630421A8'
        profileSrc='https://scontent.flhr13-1.fna.fbcdn.net/v/t1.6435-9/49155140_791459524525561_1405963565889748992_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=AttHSeCkWYMAX_d-yeE&_nc_ht=scontent.flhr13-1.fna&oh=00_AT9knO2zgNAOEgc3sw0bXZY9bYtZu3eNTH6NSbZ7CMfcow&oe=6326ACF0'
        title='Rez So'
      />
      <Story 
        image='https://scontent.flhr13-1.fna.fbcdn.net/v/t39.30808-6/300377461_10160179328944084_913957709628908592_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=107&ccb=1-7&_nc_sid=5b7eaf&_nc_ohc=JCpOSHgAdekAX988t29&_nc_ht=scontent.flhr13-1.fna&oh=00_AT9xt5TeL_fe7DSK9cdJj_EQYtUsShzBeJomrgq98MOeHg&oe=63055BF9'
        profileSrc='https://scontent.flhr13-1.fna.fbcdn.net/v/t39.30808-6/296107156_5287635594650938_7518548853060055304_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Z9dELR6fznYAX-cD7i2&_nc_ht=scontent.flhr13-1.fna&oh=00_AT_ZKo5Z8kEvqEx_FGQYIq10tUGrUBiOyjCqq4L85umJLQ&oe=6303A7CA'
        title='Shil Nou'
      />
      <Story 
        image='https://scontent.flhr13-1.fna.fbcdn.net/v/t39.30808-6/300220457_3179681069011177_1556439985632087887_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5b7eaf&_nc_ohc=0kS3HUY8S94AX-WhGb0&tn=XOl8PHIKzqedlb8l&_nc_ht=scontent.flhr13-1.fna&oh=00_AT9hsygWQ6j2o3-w4_a3_CHAqpeFSjConkaxidaA0BHr9Q&oe=6303D208'
        profileSrc='https://scontent.flhr13-1.fna.fbcdn.net/v/t1.6435-9/44676708_10156385772412713_4911048146651447296_n.png?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=c7HhreJISJgAX_-_BnU&_nc_ht=scontent.flhr13-1.fna&oh=00_AT_Ih9IN_UlsTczzp04y1pKFHLNIjfwg9hgd5m-pRw1xyA&oe=632353D0'
        title='Ami Bachan'
      />
      <Story 
        image='https://scontent.flhr13-1.fna.fbcdn.net/v/t39.30808-6/300073206_1500075420436487_2728156381108432885_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=100&ccb=1-7&_nc_sid=5b7eaf&_nc_ohc=UQhCa9d2xpsAX9Ly5TZ&tn=XOl8PHIKzqedlb8l&_nc_ht=scontent.flhr13-1.fna&oh=00_AT_dfjpu_pChqAq7AGYdcU2-slJBXa2cInnMXaXbaY1LpA&oe=630444D9'
        profileSrc='https://scontent.flhr13-1.fna.fbcdn.net/v/t31.18172-8/858917_155750214580469_1275519730_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=FVyqeqD6tRYAX8P9DLp&_nc_ht=scontent.flhr13-1.fna&oh=00_AT_ehrx7kyaP3c0w3XzgzuFfTzgv1XZDHqzGnbVzdjJM8g&oe=6324B173'
        title='Ati Bashi'
      />

    </div>
  )
}

export default StoryReel;