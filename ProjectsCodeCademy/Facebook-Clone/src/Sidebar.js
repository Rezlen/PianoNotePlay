import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/People';
import ChatIcon from '@mui/icons-material/Chat';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreOutlined from '@mui/icons-material/ExpandMoreOutlined'; // It seems no Curly brackets would be accepted

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow title='Rez' src='https://media-exp1.licdn.com/dms/image/D4E35AQEGNzmXA9GRBA/profile-framedphoto-shrink_200_200/0/1658819612704?e=1661504400&v=beta&t=d4IZMXu8Iv2GTJrQ3pPXd-MN-U05TBuGNWgtI0ZE7Rc' />
      <SidebarRow Icon={LocalHospitalIcon} title='Covid 19 Information center' />
      <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
      <SidebarRow Icon={PeopleIcon} title='Friends' />
      <SidebarRow Icon={ChatIcon} title='Messenger' />
      <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
      <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
      <SidebarRow Icon={ExpandMoreOutlined} title='Marketplace' />
    </div>
  )
}

export default Sidebar;