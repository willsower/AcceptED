// Counselor profile information
import MyStudents from '../../components/Cards/myStudents'
import MyProfile from '../../components/Cards/myProfile'
import MyInformation from '../../components/Cards/myInformation'
import StudentColleges from '../../components/Cards/studentColleges'

function CounselorProfile() {
    return (
        <div className = 'mt-12 md:flex md:flex-row ml-14'>
            <div className = 'md:w-96 md:flex md:flex-col'>
                <MyProfile />
                <MyInformation />
                <MyStudents />
            </div>

            <div className = 'md:flex-col md:w-full md:ml-14'>
                <StudentColleges />
            </div>
        </div>
    )
}

export default CounselorProfile;