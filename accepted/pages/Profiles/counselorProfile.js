// Counselor profile information
import MyStudents from '../../components/Cards/myStudents'
import MyProfile from '../../components/Cards/myProfile'
import MyInformation from '../../components/Cards/myInformation'
import StudentColleges from '../../components/Cards/studentColleges'

function CounselorProfile() {
    return (
        <div className = 'mt-12 md:flex md:flex-row ml-14'>
            <div className = 'md:w-96 md:flex md:flex-col mb-4'>
                <MyProfile />
                <MyInformation />
                <MyStudents />

                <h3 className = 'mb-3 mt-3 font-bold'>Directory</h3>
                <div className = 'border-2 border-gray-300 rounded pl-3 pt-3 pb-3 w-4/5 sm:w-96 relative'>
                    <p className = 'inline-block text-xs'>Go to Directory</p>
                    <div className = 'inline-block'>Img</div>
                </div>
            </div>

            <div className = 'md:flex-col md:w-full md:ml-14'>
                <StudentColleges />
            </div>
        </div>
    )
}

export default CounselorProfile;