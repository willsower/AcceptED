import Image from 'next/image'
import React from 'react';

function MyInformation({ profile }) {
    const [showModal, setShowModal] = React.useState(false);
    var email = 'jatr812@gmail.com';
    var majors = 'Computer Science';
    var password = 'secretPass';

    return (
        <>
            {profile.map((user) => (
                <div key = {user.id}>
                    <h3 className = 'mb-3 mt-3 font-bold'>My Information</h3>
                    <div className = 'border-1 border-gray-200 rounded pl-6 pt-6 pb-6 w-4/5 md:w-72 lg:w-96 relative bg-white shadow-md'>
                        <div className = 'w-3/5 mt-auto mb-auto'>
                            <div className ='absolute top-0 right-0 h-16 w-10 mt-2'>
                                <button className = 'focus:outline-none' onClick={() => setShowModal(true)}>
                                    <Image
                                        priority
                                        src="/images/Icon/pencil_ico.svg"
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
                                                        Add Student
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
                                                        <p className = 'text-xs'>Email Address</p>
                                                        <input className='text-sm bg-white rounded p-2 mb-4 border w-72 lg:w-80' type='email' aria-label='email address' placeholder={user.email}/>

                                                        <p className = 'text-xs'>My Major</p>
                                                        <input className='text-sm bg-white rounded p-2 mb-4 border w-72 lg:w-80' type='major' aria-label='email address' placeholder={user.majors}/>

                                                        <p className = 'text-xs'>Password</p>
                                                        <input className='text-sm bg-white rounded p-2 mb-4 border w-72 lg:w-80' type='password' aria-label='email address' placeholder= {user.password}/>

                                                        <div className='flex items-center justify-end rounded-b'>
                                                            <button className = 'focus:outline-none w-20 bg-blue-600 text-white rounded md:w-28 p-1 m-auto'
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
                            <div className = 'text-xs'>
                                <div className = 'mb-3'>
                                    <p className = 'inline-block mr-1'>Email:</p>
                                    <p className = 'inline-block'>{user.email}</p>
                                </div>

                                <div className = 'mb-2'>
                                    <p className = 'inline-block mr-1'>Major(s):</p>
                                    <p className = 'inline-block'>{user.majors}</p>
                                </div>

                                <div className = 'align-middle'>

                                    <p className = 'inline-block mr-1 align-middle'>Password:</p>
                                    <p className = 'inline-block mr-2 align-middle'>{user.password}</p>

                                    <div className = 'inline-block align-middle'>
                                        <Image
                                            priority
                                            src="/images/Icon/eye_ico.svg"
                                            className = ''
                                            height={20}
                                            width={20}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}

export default MyInformation;