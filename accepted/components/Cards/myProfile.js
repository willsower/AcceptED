import Image from 'next/image'

function MyProfile() {
    return (
        <div className = 'border-1 border-gray-200 rounded pl-4 pt-3 pb-3 w-4/5 md:w-72 lg:w-96 relative flex flex-row bg-white shadow-md'>
            <div className = 'w-2/5'>
                {/* Outer Blue Circle */}
                <div className = ''>
                    <Image
                        priority
                        src="/images/profile_pic_temp.png"
                        className = 'rounded-full'
                        height={120}
                        width={115}
                    />
                </div>

                {/* Inner Profile Picture */}
                <div className = 'absolute top-7 left-7 md:top-6 md:left-6 lg:top-7 lg:left-7'>
                    <Image
                        priority
                        src="/images/cat.png"
                        className = 'rounded-full'
                        height={90}
                        width={90}
                    />
                </div>
            </div>
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
                <h3 className = 'font-bold mb-1'>Taichen Rose</h3>
                <p className = 'text-xs mb-1'>Joined May 2021</p>
                <p className = 'text-xs'>Western Washington University</p>
            </div>
        </div>
    )
}

export default MyProfile;