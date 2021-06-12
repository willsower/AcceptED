import Head from 'next/head';
import LoginSignup, { siteTitle } from './login_signup';
import React, { Component } from 'react'

export default function Home() {
  return (
    <div>
      <LoginSignup home>
        <Head>
          <title> {siteTitle} </title>
        </Head>
      </LoginSignup>
    </div>
  )
}
