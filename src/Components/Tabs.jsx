"use client"
import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'

const Tabs = () => {

  const searchParams = useSearchParams();
  const genre = searchParams.get('genre')
  console.log(genre);
  const tabs = [
    {
      name: "En popüler",
      url: "popular"
    },
    {
      name: "En çok oy alan",
      url: "top_rated"
    },
    {
      name: "Yakında",
      url: "upcoming"
    }
  ]

  return (
    <div className='p-5 m-5 bg-gray-100 dark:bg-gray-800 flex items-center justify-center gap-7'>
        {
          tabs.map((tab, i) => {
            return (
              <Link key={i} className={`cursor-pointer hover:opacity-75 transition-opacity ${tab.url === genre ? "underline underline-offset-8 text-amber-800" : ""}`} href={`/?genre=${tab.url}`}>
                {
                  tab.name
                }
              </Link>
            )
          })
        }
    </div>
  )
}

export default Tabs