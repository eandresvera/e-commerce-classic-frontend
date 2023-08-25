import React from 'react'

export const IconUser = ({ active=false }) => {
  return (
<svg fill={`${active ? '#00ad96' : '#fff'}`} width="25px" height="25px" viewBox="0 0 36 36" version="1.1"  preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" >
    <title>user-solid</title>
    <path d="M30.61,24.52a17.16,17.16,0,0,0-25.22,0,1.51,1.51,0,0,0-.39,1v6A1.5,1.5,0,0,0,6.5,33h23A1.5,1.5,0,0,0,31,31.5v-6A1.51,1.51,0,0,0,30.61,24.52Z" class="clr-i-solid clr-i-solid-path-1"></path><circle cx="18" cy="10" r="7" class="clr-i-solid clr-i-solid-path-2"></circle>
    <rect x="0" y="0" width="36" height="36" fill-opacity="0"/>
</svg>
  )
}
