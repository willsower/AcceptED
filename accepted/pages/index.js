import Head from 'next/head';
import CreateAccount, { siteTitle } from './create_account';
import React, { Component } from 'react'

class Index extends Component {
  render() {
    return (
      <div>
        <CreateAccount home>
          <Head>
            <title> {siteTitle} </title>
          </Head>
        </CreateAccount>
      </div>
    )
  }
}

export default Index;