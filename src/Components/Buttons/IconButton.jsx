import React from 'react'
import style from '../../Styles/IconButton.module.css'
const IconButton = ({icon}) => {
  return (
    <div className={style.iconbutton}>
    <img src={icon} alt="icon" />

    </div>
  )
}

export default IconButton