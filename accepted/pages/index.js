import Head from 'next/head';
import LoginSignup, { siteTitle } from './login_signup';
import React, { Component } from 'react'

class Index extends Component {
  render() {
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
}

export default Index;