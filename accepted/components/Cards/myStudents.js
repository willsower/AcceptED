import Image from 'next/image'
import React from 'react';

function MyStudents() {
    const [showModal, setShowModal] = React.useState(false);

    return (
        <>
            <h3 className = 'mb-3 mt-3 font-bold'>My Student(s)</h3>
            <div className = 'border-1 border-gray-200 rounded pl-6 w-4/5 md:w-72 lg:w-96 relative bg-white shadow-md'>
                <div className = 'mt-auto mb-auto'>
                    <div className ='absolute top-0 right-0 h-16 w-10 mt-2'>
                        
                        <button type='button' 
                        onClick={() => setShowModal(true)}>
                            <Image
                                priority
                                src="/images/add_user_temp.png"
                                className = ''
                                height={30}
                                width={30}
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
                                                className= 'mr-4'
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
                                                <p className = 'text-xs'>Name of Student <span className = 'text-blue-600	'>*</span></p>
                                                <input className='text-sm bg-white rounded p-2 mb-4 border w-72 lg:w-80' type='studentName' placeholder='Student Name'/>

                                                <p className = 'text-xs'>Email of Student <span className = 'text-blue-600	'>*</span></p>
                                                <input className='text-sm bg-white rounded p-2 mb-4 border w-72 lg:w-80' type='studentEmail' aria-label='email address' placeholder='Student Email'/>

                                                <div className='flex items-center justify-end rounded-b'>
                                                    <button className = 'w-20 bg-blue-600 text-white rounded md:w-28 p-1 m-auto'
                                                            onClick={() => setShowModal(false)}>
                                                        Add
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

                    {/* Student Card Here */}
                    <div className = 'pb-6 pt-6'>
                        <div className = 'text-xs'>
                            <div className = 'mb-3'>
                                <p className = 'inline-block mr-1'>Name:</p>
                                <p className = 'inline-block'>Taichen Rose</p>
                            </div>

                            <div className = ''>
                                <p className = 'inline-block mr-1'>Email:</p>
                                <p className = 'inline-block'>jatr812@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyStudents;