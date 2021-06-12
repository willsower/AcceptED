import Image from 'next/image'
import React from 'react';


function MyProfile({ profile }) {
    const [showModal, setShowModal] = React.useState(false);
    
    return (
        <>
            {Object.entries(profile).map((user) => (
                <div className = 'border-1 border-gray-200 rounded pl-4 pt-3 pb-3 w-4/5 md:w-72 lg:w-96 relative flex flex-row bg-white shadow-md'>
                    <div className = 'w-2/5'>
                        {/* Outer Blue Circle */}
                        <div className = ''>
                            <Image
                                priority
                                src='/images/Profile/blue_elipse.svg'
                                className = 'rounded-full'
                                height={120}
                                width={115}
                            />
                        </div>

                        {/* Inner Profile Picture */}
                        <div className = 'absolute top-7 left-7 md:top-6 md:left-6 lg:top-7 lg:left-7'>
                            <Image
                                priority
                                src='/images/cat.png'
                                className = 'rounded-full'
                                height={90}
                                width={90}
                            />
                        </div>
                    </div>

                    {/* Edit Button For My Profile */}
                    <div className = 'w-3/5 mt-auto mb-auto'>
                        <div className ='absolute top-0 right-0 h-16 w-10 mt-2 cursor-pointer'>
                            <button type='button' className = 'focus:outline-none'
                                onClick={() => setShowModal(true)}>
                                <Image
                                    priority
                                    src='/images/Icon/pencil_ico.svg'
                                    className = ''
                                    height={25}
                                    width={25}
                                />
                            </button>

                            {/* Show Modal */}
                            {showModal ? (
                                <>
                                <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>

                                    <div className='relative w-auto my-6 mx-auto max-w-3xl'>

                                        {/* Content */}
                                        <div className='border-0 rounded-lg shadow-lg relative flex flex-col md:w-96 bg-white outline-none focus:outline-none'>

                                            {/* Header */}
                                            <div className='flex items-start justify-between pt-4 pl-4 pb-4 rounded-t'>
                                                <h3 className='text-base sm:text-xl font-semibold'>
                                                    Edit Profile
                                                </h3>
                                                <button
                                                    className= 'mr-4 focus:outline-none'
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    <Image
                                                        priority
                                                        src='/images/exit_temp.png'
                                                        className = ''
                                                        height={25}
                                                        width={25}
                                                    />
                                                </button>
                                            </div>

                                            {/* Body */}
                                            <div className='relative pl-4 pb-4 pr-4 m-auto'>
                                                <form className=''>
                                                    <p className = 'text-xs'>Full Name</p>
                                                    <input className='text-sm bg-white rounded p-2 mb-4 border w-72 lg:w-80' type='studentName' placeholder= {user.fname + ' ' + user.lname}/>

                                                    <p className = 'text-xs'>Date Joined</p>
                                                    <input className='text-sm bg-white rounded p-2 mb-4 border w-72 lg:w-80' type='dateJoined' aria-label='email address' placeholder=''/>

                                                    <p className = 'text-xs'>My School</p>
                                                    <input className='text-sm bg-white rounded p-2 mb-4 border w-72 lg:w-80' type='mySchool' aria-label='email address' placeholder={user.university}/>

                                                    <div className='flex items-center justify-end rounded-b'>
                                                        <button className = 'w-20 bg-blue-600 text-white rounded md:w-28 p-1 m-auto focus:outline-none'
                                                                onClick={() => setShowModal(false)}>
                                                            Edit
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
                                </>
                            ) : null}

                        </div>
                        <h3 className = 'font-bold mb-1'>Name: {user.fname} {user.lname}</h3>
                        <p className = 'text-xs mb-1'>Joined:</p>
                        <p className = 'text-xs'>University: {user.university}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default MyProfile;


