import Head from 'next/head';
import SignUp, { siteTitle } from './signup';

export default function Home() {
  return (
    <SignUp home>
      <Head>
        <title> {siteTitle} </title>
      </Head>
    </SignUp>
  )
}
