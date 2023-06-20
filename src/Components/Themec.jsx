import React from 'react'
import { CiDark } from 'react-icons/ci'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'
import { BsFillSunFill } from 'react-icons/bs'

const Themec = () => {

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [])

  const { systemTheme, theme, setTheme } = useTheme();

  const themeMode = theme === "system" ? systemTheme : theme

  return (
    <div>
      {
        mounted && (
          themeMode === "dark" ?
            <BsFillSunFill className='cursor-pointer' onClick={() => {
              setTheme(theme == "light" ? "dark" : "light")
            }} size={25} /> :
            <CiDark className='cursor-pointer' onClick={() => {
              setTheme(theme == "light" ? "dark" : "light")
            }} size={25} />
        )
      }
    </div>
  )
}

export default Themec