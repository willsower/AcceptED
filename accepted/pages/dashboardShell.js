import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

// Test
import CounselorProfile from './Profiles/counselorProfile';
import Messages from './messages';


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
                    <div className = 'fixed border-r border-gray-200 sm:w-36 h-screen'>
                        {/* Profile Picture */}
                        <div className = 'mt-2'>
                            <div className = 'p-4 sm:pl-9 sm:pr-9'>
                                <Image
                                    priority
                                    src="/images/logo_temp.png"
                                    className = ''
                                    height={100}
                                    width={100}
                                />
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className = ''>
                            {/* Home */}
                            <Link href = '/'>
                                <div className = 'w-full sm:h-12 p-2 sm:p-4 m-auto align-middle hover:bg-blue-50 active:bg-blue-50'>
                                    <div className = 'inline-block align-middle mr-1 sm:mr-3'>
                                        <Image
                                            priority
                                            src="/images/home_temp.png"
                                            className = ''
                                            height={20}
                                            width={20}
                                        />
                                    </div>
                                    <div className = 'text-xs sm:text-base inline-block text-gray-400'>
                                        Home
                                    </div>
                                </div>
                            </Link>

                            {/* Message */}
                            <Link href = '/'>
                                <div className = 'w-full sm:h-12 p-2 sm:p-4 m-auto hover:bg-blue-50 active:bg-blue-50'>
                                    <div className = 'inline-block align-middle mr-1 sm:mr-3'>
                                        <Image
                                            priority
                                            src="/images/messages_temp.png"
                                            className = ''
                                            height={20}
                                            width={20}
                                        />
                                    </div>
                                    <div className = 'text-xs sm:text-base inline-block text-gray-400'>
                                        Messages
                                    </div>
                                </div>
                            </Link>

                            {/* Materials */}
                            <Link href = '/'>
                                <div className = 'w-full sm:h-12 p-2 sm:p-4 m-auto hover:bg-blue-50 active:bg-blue-50'>
                                    <div className = 'inline-block align-middle mr-1 sm:mr-3'>
                                        <Image
                                            priority
                                            src="/images/materials_temp.png"
                                            className = ''
                                            height={20}
                                            width={20}
                                        />
                                    </div>
                                    <div className = 'text-xs sm:text-base inline-block text-gray-400'>
                                        Materials
                                    </div>
                                </div>
                            </Link>

                            {/* Tasks */}
                            <Link href = '/'>
                                <div className = 'w-full sm:h-12 p-2 sm:p-4 m-auto hover:bg-blue-50 active:bg-blue-50'>
                                    <div className = 'inline-block align-middle mr-1 sm:mr-3'>
                                        <Image
                                            priority
                                            src="/images/tasks_temp.png"
                                            className = ''
                                            height={20}
                                            width={20}
                                        />
                                    </div>
                                    <div className = 'text-xs sm:text-base inline-block text-gray-400'>
                                        Tasks
                                    </div>
                                </div>
                            </Link>

                            {/* Profile */}
                            <Link href = '/dashboardShell'>
                                <div className = 'w-full sm:h-12 p-2 sm:p-4 m-auto hover:bg-blue-50 active:bg-blue-50'>
                                    <div className = 'inline-block align-middle mr-1 sm:mr-3'>
                                        <Image
                                            priority
                                            src="/images/profileico_temp.png"
                                            className = ''
                                            height={20}
                                            width={20}
                                        />
                                    </div>
                                    <div className = 'text-xs sm:text-base inline-block text-gray-400'>
                                        Profile
                                    </div>
                                </div>
                            </Link>

                            {/* Logout */}
                            <Link href = '/'>
                                <div className = 'w-full sm:h-12 p-2 sm:p-4 m-auto hover:bg-blue-50 active:bg-blue-50'>
                                    <div className = 'inline-block align-middle mr-1 sm:mr-3'>
                                        <Image
                                            priority
                                            src="/images/logout_temp.png"
                                            className = ''
                                            height={20}
                                            width={20}
                                        />
                                    </div>
                                    <div className = 'text-xs sm:text-base inline-block text-gray-400'>
                                        Log Out
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Right Side of Screen */}
                <div className='flex-grow h-screen flex flex-col relative'>

                    {/* Header Top */}
                    <div className='h-16 flex flex-col relative'>
                        <div className = 'border-b border-gray-200 h-16 w-full z-10 fixed bg-white'>
                            <div className = 'mt-auto mb-auto p-3 ml-2'>                
                                <div className = 'text-2xl font-semibold inline-block'>
                                    Profile
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Bottom */}
                    <div className='flex-grow h-auto flex flex-col relative bg-gray-50 pt-12 pb-12 z-0'>
                        {/* Test */}
                        {/* <CounselorProfile /> */}
                        <Messages />
                    </div>
                </div>
            </div>
        </main>
    </>
  );
}