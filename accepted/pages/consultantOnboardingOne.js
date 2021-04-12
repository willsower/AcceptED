import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export const siteTitle = 'Consulting Onboarding | AcceptED'

// Consultant Onboarding - Upload Photo
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
