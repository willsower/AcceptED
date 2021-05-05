import Head from 'next/head';
import Nav from '../components/nav';
import Header from '../components/header';

// Test
import CounselorProfile from './Profiles/counselorProfile';


export default function DashboardShell() {
  return (
    <>
        <Head>
        {/* <title>{ siteTitle }</title> */}
            <title>Test</title>
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <main>
            <div className='flex flex-row'>
                {/* Navbar - Left */}
                <div className='sm:w-36 h-screen flex flex-col relative'>
                    <Nav />
                </div>

                {/* Right Side of Screen */}
                <div className='flex-grow h-screen flex flex-col relative'>
                    {/* Header Top */}
                    <div className='h-16 flex flex-col relative'>
                        <Header />
                    </div>

                    {/* Content Bottom */}
                    <div className='flex-grow h-auto flex flex-col relative bg-gray-50 pt-12 pb-12'>
                        {/* Test */}
                        <CounselorProfile />
                    </div>
                </div>
            </div>
        </main>
    </>
  );
}