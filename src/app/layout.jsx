"use client"
import React from 'react'
import './globals.css'
import Header from '@/components/Header'
import Providers from './Providers'
import Tabs from '@/Components/Tabs'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <html lang='en'>
      <Head>
        <title>
          Movies App
        </title>
      </Head>
      <body>
        <Providers>
          <Header />
          <Tabs />
          {
            children
          }
        </Providers>
      </body>
    </html>
  )
}

export default Layout