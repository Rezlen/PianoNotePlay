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
import { useStateValue } from './StateProvider';// to add the user login/profile pic name etc.

function Sidebar() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className='sidebar'>
      <SidebarRow title={user.displayName} src={user.photoURL} />
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