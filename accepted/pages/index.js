import Head from 'next/head';
import SignUp, { siteTitle } from './signup';
import React, { Component } from 'react'

class Index extends Component {
  render() {
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
}

export default Index;