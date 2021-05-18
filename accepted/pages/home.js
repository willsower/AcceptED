import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { nav } from './helper';
import React, { Component } from 'react'
import RecentEssays from '../components/Cards/Home/recent_essays';
import LatestMaterials from '../components/Cards/Home/latest_materials'

class Home extends Component {
    render(){
        return(
            <div>
            <Head>
                <title>Home | AcceptED</title>
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
                                {nav('/home', '/images/Shell/home_blue_ico.svg', 'Home')}

                                {/* Message */}
                                {nav('/messages', '/images/Shell/message_ico.svg', 'Messages')}

                                {/* Materials */}
                                {nav('/materials', '/images/Shell/materials_ico.svg', 'Materials')}

                                {/* Tasks */}
                                {nav('/tasks', '/images/Shell/tasks_ico.svg', 'Tasks')}

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
                                        Home
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Bottom */}
                        <div className='flex-grow h-auto flex flex-col relative bg-gray-50 pb-12 z-0'>                            
                            <div className = 'w-full h-auto'>
                                {/* Module List */}
                                <div className = 'border-1 border-gray-200 rounded-lg flex flex-row bg-white shadow-lg w-11/12 h-12 m-auto mt-8'>

                                    {/* Module Card */}
                                    <div className = 'inline-block h-8 w-20 bg-gray-100 rounded text-xs md:text-sm text-center mt-auto mb-auto ml-2 text-gray-400'>
                                        <button className = 'mt-2'>
                                            Module 1
                                        </button>
                                    </div>
                                </div>

                                {/* Everything Below the Module List */}
                                <div className = 'md:flex md:w-11/12 m-auto h-auto'>
                                    {/* Left Chunk */}
                                    <div className = 'md:w-8/12 lg:w-9/12 h-auto'>
                                        {/*  Recent Essays */}
                                        <RecentEssays />

                                        {/* Split */}
                                        <div className = 'lg:flex lg:flex-row lg:w-full lg:m-auto'>
                                            {/* Left */}
                                            <div className = 'lg:w-1/2 w-11/12 md:w-full m-auto'>
                                                {/* Latest Materials */}
                                                <LatestMaterials />
                                            </div>

                                            {/* Right */}
                                            <div className = 'lg:w-1/2 w-11/12 md:w-full m-auto lg:ml-4'>
                                                {/* Updates */}
                                                <h5 className = 'text-sm text-gray-600 mt-4'>Updates</h5>
                                                <div className = 'border-1 border-gray-200 rounded-lg flex flex-row bg-white shadow-lg w-full h-60 m-auto mt-4'>
                                                    <div className = 'm-auto'>
                                                        <Image
                                                            priority
                                                            src="/images/Home/updates_empty.svg"
                                                            className = ''
                                                            height={140}
                                                            width={200}
                                                        />
                                                        <div className = 'text-center'>
                                                            <h3 className = 'font-semibold text-gray-600'>No updates so far...keep an eye out!</h3>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Tasks */}
                                                {/* <div className = 'border-1 border-gray-200 rounded-lg relative flex flex-row bg-white shadow-lg w-11/12 h-60 m-auto mt-4'>

                                                </div> */}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Chunk (this weeks schedule/tasks) */}
                                    <div className = 'md:w-4/12 lg:w-3/12 md:ml-4'>
                                        <h5 className = 'text-sm text-gray-600 md:ml-0 ml-6 mt-4'>This Week's Schedule</h5>
                                        {/* Calendar */}
                                        <div className = 'border-1 border-gray-200 rounded-lg bg-white shadow-lg w-11/12 md:w-full h-36 mt-4 m-auto'>
                                                Stuff
                                        </div>

                                        {/* Meetings? */}
                                        <div className = 'border-1 border-gray-200 rounded-lg flex flex-row bg-white shadow-lg w-11/12 md:w-full h-52 mt-4 m-auto'>
                                            <div className = 'm-auto'>
                                                <Image
                                                    priority
                                                    src="/images/Home/events_empty.svg"
                                                    className = ''
                                                    height={100}
                                                    width={140}
                                                />
                                                <div className = 'text-center'>
                                                    <h3 className = 'font-semibold text-gray-600'>No events this week!</h3>
                                                    <p className = 'text-xs text-blue-600 font-semibold'>Add an Event &gt;</p>
                                                </div>
                                            </div>
                                        </div>      

                                        {/* My Tasks */}
                                        <h5 className = 'text-sm text-gray-600 ml-6 mt-4 md:ml-0'>My Tasks</h5>
                                        <div className = 'border-1 border-gray-200 rounded-lg flex flex-row bg-white shadow-lg w-11/12 md:w-full h-auto mt-4 m-auto'>
                                            {/* Tasks to Display */}
                                            <div className = 'p-2'>
                                                {/* My Tasks Header */}
                                                <div className = 'algin-middle'>
                                                    <div className = 'inline-block align-middle'>
                                                        <Image
                                                            priority
                                                            src="/images/Home/myTasks_ico.svg"
                                                            className = ''
                                                            height={30}
                                                            width={30}
                                                        />
                                                    </div>

                                                    <h5 className = 'text-xs ml-3 pb-1 inline-block align-middle mr-1'>Today</h5>

                                                    <div className = 'inline-block align-bottom pb-1'>
                                                        <Image
                                                            priority
                                                            src="/images/Icon/arrow_ico.svg"
                                                            className = ''
                                                            height={20}
                                                            width={20}
                                                        />
                                                    </div>
                                                </div>

                                                {/* Add a task */}
                                                <div className = ''>
                                                    <button className = 'inline-block align-middle focus:outline-none'>
                                                        <Image
                                                            priority
                                                            src="/images/Icon/add_ico.svg"
                                                            className = ''
                                                            height={20}
                                                            width={20}
                                                        />                                        
                                                    </button>

                                                    <input type = 'text' name = 'task' placeholder = 'Add a new task here...' className = 'focus:outline-none text-xs ml-2 inline-block' ></input>
                                                </div>


                                                {/* Display tasks */}
                                                <div className = ''>
                                                    {/* {myTasks.map(function(task) {
                                                        return (<li>{task}</li>)
                                                    })} */}
                                                </div>
                                            </div>
                                        </div>              
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        )
    }
}

export default Home;