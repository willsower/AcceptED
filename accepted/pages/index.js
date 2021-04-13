import Head from 'next/head'
// import Layout, { siteTitle } from './consultantOnboarding'
import Layout, { siteTitle } from './signup'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>
      </Head>
    </Layout>
  )
}
