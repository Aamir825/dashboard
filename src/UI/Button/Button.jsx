import React from 'react'

function Button({text,icon,type,style,onClick}) {
  return (
    <button name='' type={type} onClick={onClick} className={`${style}`}>{text}{icon}</button>
  )
}

export default Button