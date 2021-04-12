import Head from 'next/head'
export const siteTitle = 'Sign-Up | AcceptED'

// General Nav Layout
export default function Layout({children, home}) {
  return (
    <div>
      <Head>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        { children }
      </main>
    </div>
  )
}
