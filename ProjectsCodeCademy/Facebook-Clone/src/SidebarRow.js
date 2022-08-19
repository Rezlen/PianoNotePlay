import React from 'react'
import './SidebarRow.css'

function SidebarRow(props) {
  return (
    <div className='sidebarRow'>
      <p>{props.title}</p>
    </div>
  )
}

export default SidebarRow;