import Head from 'next/head';
import SignUp, { siteTitle } from './signup';
import React, { Component } from 'react'

export default function Home() {
  return (
    <div>
      <SignUp home>
        <Head>
          <title> {siteTitle} </title>
        </Head>
      </SignUp>
    </div>
  )
}