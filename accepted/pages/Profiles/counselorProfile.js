// Counselor profile information
import MyStudents from '../../components/Cards/myStudents'
import MyProfile from '../../components/Cards/myProfile'
import MyInformation from '../../components/Cards/myInformation'
import StudentColleges from '../../components/Cards/studentColleges'

import Image from 'next/image'

function CounselorProfile() {
    return (
        <div className = 'mt-24 md:flex md:flex-row ml-14'>
            <div className = 'md:w-72 lg:w-96 md:flex md:flex-col mb-4'>
                <MyProfile />
                <MyInformation />
                <MyStudents />

                <h3 className = 'mb-3 mt-3 font-bold'>Directory</h3>
                <div className = 'border-1 border-gray-200 rounded pl-3 pt-3 pb-3 w-4/5 md:w-72 lg:w-96 relative bg-white shadow-md'>
                    <p className = 'inline-block text-xs align-middle mr-8'>Go to Directory</p>
                    <div className = 'inline-block align-middle'>
                        <Image
                            priority
                            src="/images/goto_temp.png"
                            className = ''
                            height={20}
                            width={20}
                        />
                    </div>
                </div>
            </div>

            <div className = 'md:flex-col md:w-full md:ml-14'>
                <StudentColleges />
            </div>
        </div>
    )
}

export default CounselorProfile;