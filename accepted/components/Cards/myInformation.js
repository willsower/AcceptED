import Image from 'next/image'

function MyInformation() {
    return (
        <>
            <h3 className = 'mb-3 mt-3 font-bold'>My Information</h3>
            <div className = 'border-1 border-gray-200 rounded pl-6 pt-6 pb-6 w-4/5 md:w-72 lg:w-96 relative bg-white shadow-md'>
                <div className = 'w-3/5 mt-auto mb-auto'>
                    <div className ='absolute top-0 right-0 h-16 w-10 mt-2'>
                        <Image
                            priority
                            src="/images/edit_temp.png"
                            className = ''
                            height={30}
                            width={30}
                        />
                    </div>
                    <div className = 'text-xs'>
                        <div className = 'mb-3'>
                            <p className = 'inline-block mr-1'>Email:</p>
                            <p className = 'inline-block'>jatr912@gmail.com</p>
                        </div>

                        <div className = 'mb-2'>
                            <p className = 'inline-block mr-1'>Major(s):</p>
                            <p className = 'inline-block'>Computer Science</p>
                        </div>

                        <div className = 'align-middle'>

                            <p className = 'inline-block mr-1 align-middle'>Password:</p>
                            <p className = 'inline-block mr-2 align-middle'>mypassword</p>

                            <div className = 'inline-block align-middle'>
                                <Image
                                    priority
                                    src="/images/eye_temp.png"
                                    className = ''
                                    height={30}
                                    width={30}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyInformation;