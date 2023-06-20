import Link from 'next/link'
import React from 'react'

const Menuitem = ({mn}) => {
  return (
    <div>
      <Link href={`${mn.url}`}>{mn.name}</Link>
    </div>
  )
}

export default Menuitem