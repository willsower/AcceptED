import Image from 'next/image'

function MyStudents() {
    return (
        <>
            <h3 className = 'mb-3 mt-3 font-bold'>My Student(s)</h3>
            <div className = 'border-1 border-gray-200 rounded pl-6 w-4/5 md:w-72 lg:w-96 relative bg-white shadow-md'>
                <div className = 'mt-auto mb-auto'>
                    <div className ='absolute top-0 right-0 h-16 w-10 mt-2'>
                        <Image
                            priority
                            src="/images/add_user_temp.png"
                            className = ''
                            height={30}
                            width={30}
                        />
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