import React from 'react'
import {VscSearch } from 'react-icons/vsc'

export default function Header() {
  return (
    <div className=''>
      <div className='m-5 flex justify-between '>
      <div className='text-3xl text-center'>
      <h1>WOOKIES</h1>
      <h1>MOVIES</h1>
      </div>
        <div className='flex items-end'>
        <VscSearch style={{fontSize:'25px',marginRight:'10px' }}/>
        <input className='input' type='text'></input>
        </div>
        </div>
        <hr className='hr'/>
    </div>
  )
}
