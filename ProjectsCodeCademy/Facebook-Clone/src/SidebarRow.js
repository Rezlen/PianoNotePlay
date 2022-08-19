import { Avatar } from '@mui/material';
import React from 'react'
import './SidebarRow.css'

// to make it cleaner, instead of argument (props) and props.title, we just use {title}
function SidebarRow({src, Icon, title}) {
  return (
    <div className='sidebarRow'>
      {src && <Avatar src={src} />} {/*if there is src, then pass it Avatar with the src */}
      {Icon && <Icon />} {/*if there is Icon, then pass it Icon with the Icon. Note Icon passed in as a Prop not as a component*/}
      <h4>{title}</h4>
    </div>
  )
}

export default SidebarRow;