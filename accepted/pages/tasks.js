import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/Link';
import React, { Component } from 'react'
import { nav } from './helper';

class Tasks extends Component {
    render(){
        return(
            <div>
                            <Head>
                <title>Materials | AcceptED</title>
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
                                {/* Home */}
                                {nav('/home', '/images/Shell/home_ico.svg', 'Home')}

                                {/* Message */}
                                {nav('/messages', '/images/Shell/message_ico.svg', 'Messages')}

                                {/* Materials */}
                                {nav('/materials', '/images/Shell/materials_ico.svg', 'Materials')}

                                {/* Tasks */}
                                {nav('/tasks', '/images/Shell/tasks_blue_ico.svg', 'Tasks')}

                                {/* Profile*/}
                                {nav('/profile', '/images/Shell/profile_ico.svg', 'Profile')}

                                {/* Logout*/}
                                <div className = 'w-full sm:h-12 p-2 sm:p-4 m-auto hover:bg-blue-50 active:bg-blue-50 hover:cursor-pointer'>
                                    <div className = 'inline-block align-middle mr-1 sm:mr-3'>
                                        <Image
                                            priority
                                            src= '/images/Shell/logout_ico.svg'
                                            className = ''
                                            height={20}
                                            width={20}
                                        />
                                    </div>
                                    <div className = 'text-xs sm:text-base inline-block text-gray-400'>
                                        Logout
                                    </div>
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
                                        Tasks
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Bottom */}
                        <div className='flex-grow h-auto flex flex-col relative bg-gray-50 pb-12 z-0'>                               
                            <h1>Tasks Page</h1>
                        </div>
                    </div>
                </div>
            </main>
            </div>
        )
    }
}

export default Tasks