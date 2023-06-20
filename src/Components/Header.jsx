"use client"
import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import Menuitem from './Menuitem'
import Themec from './Themec'
import { useRouter } from 'next/navigation'

const Header = () => {

  const [keyword, setKeyword] = useState('')
  const router = useRouter();

  const searchFunc = (e) => {
    if(e.key == "Enter" && keyword.length >= 3) {
      router.push(`/search/${keyword}`)
    }
  }

  let menu = [
    {
      name: "About",
      url: "/about"
    },
    {
      name: "Sign In",
      url: "/login"
    }
  ]

  return (
    <div className='header'>
      <div className='head'>MovieApp</div>
      <div className='headerCenter'>
        <input
        onKeyDown={searchFunc}
         onChange={(e) => {
          setKeyword(e.target.value)
        }} className='outline-none flex-1 bg-transparent' placeholder='Arama Yapınız' type='text' value={keyword} />
        <BiSearch size={25} />
      </div>
      <Themec />
      {
        menu.map((mn, i) => {
          return (
            <Menuitem mn={mn} key={i} />)
        })
      }
    </div>
  )
}

export default Header