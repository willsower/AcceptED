import Head from 'next/head';
import Image from 'next/image';
import React from 'react'

import Home from '../components/PageComponent/home'
import Messages from '../components/PageComponent/messages';
import Materials from '../components/PageComponent/materials'
import Tasks from '../components/PageComponent/tasks'
import CounselorProfile from '../components/PageComponent/Profiles/counselorProfile';

const pages = [CounselorProfile, Messages];

export default function DashboardShell() {
    const { useState } = React;
    const [currentPage, setCurrentPage] = useState('Dashboard');

    const renderPage = () => {
        if (currentPage == 'Dashboard') {
            return <Home />
        } else if (currentPage == 'Messages') {
            return <Messages />;
        } else if (currentPage == 'Materials') {
            return <Materials />;
        } else if (currentPage == 'Tasks') {
            return <Tasks />;
        } else if (currentPage == 'Profile') {
            return <CounselorProfile />;
        }
    }

    return (
        <>
            <Head>
            {/* <title>{ siteTitle }</title> */}
                <title>{currentPage} | AcceptED</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main>
                <div className='flex flex-row'>

                    {/* Navbar - Left */}
                    <div className='sm:w-40 h-screen flex flex-col relative'>
                        <div className = 'fixed border-r border-gray-200 sm:w-40 h-screen'>
                            {/* AcceptED Logo */}
                            <div className = 'mt-2'>
                                <div className = 'p-4 sm:pl-9 sm:pr-9'>
                                    <Image
                                        priority
                                        src="/images/accepted_logo.svg"
                                        className = ''
                                        height={100}
                                        width={100}
                                    />
                                </div>
                            </div>

                            {/* Navigation */}
                            <div className = ''>
                                {/* Home -> 0*/}
                                <div className = 'w-full sm:h-12 p-2 sm:p-4 m-auto align-middle hover:bg-blue-50 active:bg-blue-50 hover:cursor-pointer' onClick={() => setCurrentPage('Dashboard')}>
                                    <button className = 'focus:outline-none active:bg-green-700'>
                                        <div className = 'inline-block align-middle mr-1 sm:mr-3'>
                                            <Image
                                                priority
                                                src="/images/Shell/home_ico.svg"
                                                className = ''
                                                height={20}
                                                width={20}
                                            />
                                        </div>
                                        <div className = 'text-xs sm:text-base inline-block text-gray-400'>
                                            Home
                                        </div>
                                    </button>
                                </div>

                                {/* Message */}
                                <div className = 'w-full sm:h-12 p-2 sm:p-4 m-auto hover:bg-blue-50 active:bg-blue-50' onClick={() => setCurrentPage('Messages')}>
                                    <button className = 'focus:outline-none active:bg-green-700'>
                                        <div className = 'inline-block align-middle mr-1 sm:mr-3'>                                            
                                            <Image
                                                priority
                                                src="/images/Shell/message_ico.svg"
                                                className = ''
                                                height={20}
                                                width={20}
                                            />
                                        </div>
                                        <div className = 'text-xs sm:text-base inline-block text-gray-400'>
                                            Messages
                                        </div>
                                    </button>
                                </div>

                                {/* Materials */}
                                <div className = 'w-full sm:h-12 p-2 sm:p-4 m-auto hover:bg-blue-50 active:bg-blue-50' onClick={() => setCurrentPage('Materials')}>
                                    <button className = 'focus:outline-none'>
                                        <div className = 'inline-block align-middle mr-1 sm:mr-3'>
                                            <Image
                                                priority
                                                src="/images/Shell/materials_ico.svg"
                                                className = ''
                                                height={20}
                                                width={20}
                                            />
                                        </div>
                                        <div className = 'text-xs sm:text-base inline-block text-gray-400'>
                                            Materials
                                        </div>
                                    </button>
                                </div>

                                {/* Tasks */}
                                <div className = 'w-full sm:h-12 p-2 sm:p-4 m-auto hover:bg-blue-50 active:bg-blue-50' onClick={() => setCurrentPage('Tasks')}>
                                    <button className = 'focus:outline-none'>
                                        <div className = 'inline-block align-middle mr-1 sm:mr-3'>
                                            <Image
                                                priority
                                                src="/images/Shell/tasks_ico.svg"
                                                className = ''
                                                height={20}
                                                width={20}
                                            />
                                        </div>
                                        <div className = 'text-xs sm:text-base inline-block text-gray-400'>
                                            Tasks
                                        </div>
                                    </button>
                                </div>

                                {/* Profile*/}
                                <div className = 'w-full sm:h-12 p-2 sm:p-4 m-auto hover:bg-blue-50 active:bg-blue-50' onClick={() => setCurrentPage('Profile')}>
                                    <button className = 'focus:outline-none'>
                                        <div className = 'inline-block align-middle mr-1 sm:mr-3'>                                            
                                            <Image
                                                priority
                                                src="/images/Shell/profile_ico.svg"
                                                className = ''
                                                height={20}
                                                width={20}
                                            />
                                        </div>
                                        <div className = 'text-xs sm:text-base inline-block text-gray-400'>
                                            Profile
                                        </div>
                                    </button>
                                </div>

                                {/* Logout*/}
                                <div className = 'w-full sm:h-12 p-2 sm:p-4 m-auto hover:bg-blue-50 active:bg-blue-50' onClick={() => setCurrentPage('Logout')}>
                                    <button className = 'focus:outline-none'>
                                        <div className = 'inline-block align-middle mr-1 sm:mr-3'>
                                            <Image
                                                priority
                                                src="/images/Shell/logout_ico.svg"
                                                className = ''
                                                height={20}
                                                width={20}
                                            />
                                        </div>
                                        <div className = 'text-xs sm:text-base inline-block text-gray-400'>
                                            Log Out
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side of Screen */}
                    <div className='flex-grow h-auto flex flex-col relative'>

                        {/* Header Top */}
                        <div className='h-16 flex flex-col relative'>
                            <div className = 'border-b border-gray-200 h-16 w-full z-10 fixed bg-white'>
                                <div className = 'mt-auto mb-auto p-3 ml-2'>                
                                    <div className = 'text-2xl font-semibold inline-block'>
                                        {currentPage}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Bottom */}
                        <div className='flex-grow h-auto flex flex-col relative bg-gray-50 pb-12 z-0'>                            
                            {renderPage()}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}