import Image from 'next/image'

function StudentColleges() {
    return (
        <>
            <h3 className = 'mb-3 font-bold'>My Students' Colleges</h3>
            <div className = 'border-1 border-gray-200 rounded pl-6 w-4/5 md:w-11/12 sm:w-96 relative bg-white shadow-md'>
                <div className = 'mt-auto mb-auto'>

                    {/* Likely Card Here */}
                    <div className = 'pb-6 pt-6'>
                        <h5 className = 'font-semibold mb-4'>Likely</h5>
                        <div className = 'text-xs'>
                            <div className = 'mb-4'>
                                <p className = 'inline-block mr-1'>University of Southern California</p>
                                <p className = 'inline-block absolute right-3 lg:right-24 text-green-500'>Accepted!</p>
                            </div>

                            <div className = 'mb-4'>
                                <p className = 'inline-block mr-1'>University of California, Berkely</p>
                                <p className = 'inline-block absolute right-3 lg:right-24 '>Waiting</p>
                            </div>

                            <div className = ''>
                                <p className = 'inline-block mr-1'>Stanford University</p>
                                <p className = 'inline-block absolute right-3 lg:right-24 '>Rejected</p>
                            </div>
                        </div>
                    </div>

                     {/* Possible Card Here */}
                     <div className = ''>
                        <h5 className = 'font-semibold mb-4'>Possible</h5>
                        <div className = 'text-xs'>
                            <div className = 'mb-4'>
                                <p className = 'inline-block mr-1'>University of Southern California</p>
                                <p className = 'inline-block absolute right-3 lg:right-24 text-green-500'>Accepted!</p>
                            </div>

                            <div className = 'mb-4'>
                                <p className = 'inline-block mr-1'>University of California, Berkely</p>
                                <p className = 'inline-block absolute right-3 lg:right-24 '>Waiting</p>
                            </div>

                            <div className = ''>
                                <p className = 'inline-block mr-1'>Stanford University</p>
                                <p className = 'inline-block absolute right-3 lg:right-24 '>Rejected</p>
                            </div>
                        </div>
                    </div>

                     {/* Reach Card Here */}
                     <div className = 'pb-6 pt-6'>
                        <h5 className = 'font-semibold mb-4'>Reach</h5>
                        <div className = 'text-xs'>
                            <div className = 'mb-4'>
                                <p className = 'inline-block mr-1'>University of Southern California</p>
                                <p className = 'inline-block absolute right-3 lg:right-24 text-green-500'>Accepted!</p>
                            </div>

                            <div className = 'mb-4'>
                                <p className = 'inline-block mr-1'>University of California, Berkely</p>
                                <p className = 'inline-block absolute right-3 lg:right-24 '>Waiting</p>
                            </div>

                            <div className = ''>
                                <p className = 'inline-block mr-1'>Stanford University</p>
                                <p className = 'inline-block absolute right-3 lg:right-24 '>Rejected</p>
                            </div>
                        </div>
                    </div>
                
                    {/* Image */}
                    <div className = 'w-full text-center p-4'>
                        <Image
                        priority
                        src="/images/Profile/grad_hat.svg"
                        className = ''
                        height={300}
                        width={300}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default StudentColleges;