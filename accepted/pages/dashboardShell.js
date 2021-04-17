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
                <div className='w-20 h-screen flex flex-col relative border-r border-gray-200'>
                    <Nav />
                </div>

                {/* Right Side of Screen */}
                <div className='flex-grow h-screen flex flex-col relative'>
                    {/* Header Top */}
                    <div className='h-20 flex flex-col relative border-b border-gray-200'>
                        <Header />
                    </div>

                    {/* Content Bottom */}
                    <div className='flex-grow h-screen flex flex-col relative'>
                        {/* Test */}
                        <CounselorProfile />
                    </div>
                </div>
            </div>
        </main>
    </>
  );
}