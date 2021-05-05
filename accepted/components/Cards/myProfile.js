import Image from 'next/image'

function MyProfile() {
    return (
        <div className = 'border-2 border-gray-300 rounded pl-6 pt-6 pb-6 w-4/5 sm:w-96 relative flex flex-row'>
            <div className = 'w-2/5'>
                <Image
                priority
                src="/images/cat.png"
                className = 'rounded-full'
                height={100}
                width={100}
                />
            </div>
            <div className = 'w-3/5 mt-auto mb-auto'>
                <div className ='absolute top-0 right-0 h-16 w-10 mt-2'>
                    Edit
                </div>
                <h3 className = 'font-bold mb-1'>Taichen Rose</h3>
                <p className = 'text-xs mb-1'>Joined May 2021</p>
                <p className = 'text-xs'>Western Washington University</p>
            </div>
        </div>
    )
}

export default MyProfile;