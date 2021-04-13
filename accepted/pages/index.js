import Head from 'next/head'
import Layout, { siteTitle } from './consultantOnboarding'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
    </Layout>
  )
}
