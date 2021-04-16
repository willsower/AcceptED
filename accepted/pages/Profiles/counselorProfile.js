// Counselor profile information
import MyStudents from '../../components/Cards/myStudents'

function CounselorProfile() {
    return (
        <div>
            <div className = 'flex flex-row w-4/5 ml-auto mr-auto mt-8 mb-8'>
                <div className = 'w-2/5'>
                    <div className = 'h-60 w-60 bg-gray-300 rounded-full'>

                    </div>
                </div>
                <div className = 'w-3/5'>
                    <h3 className = ''>JADEN D. YOUNG</h3>
                    <p className = ''>Joined September 2020</p>
                    <p className = ''>Junior at the University of Southern California</p>
                </div>
            </div>
            <div className = 'w-4/5 ml-auto mr-auto mt-4'>
                <div className = 'table w-full border-2 border-gray-300 rounded p-4 relative ...'>
                    <div className = 'table-row-group'>
                        <div className = 'table-row'>
                            <h3 className = 'table-cell font-semibold text-lg py-1'>My Information</h3>
                            <button className = 'table-cell absolute top-2 right-2'>Edit</button>
                        </div>
                        <div className = 'table-row text-sm'>
                            <p className = 'table-cell py-2'>First name: Taichen</p>
                            <p className = 'table-cell'>Last Name: Rose</p>
                        </div>
                        <div className = 'table-row text-sm'>
                            <p className = 'table-cell py-2'>Email: jatr812@gmail.com</p>
                            <p className = 'table-cell'>School: Western Washington University</p>
                        </div>
                        <div className = 'table-row text-sm'>
                            <p className = 'table-cell py-2'>Password: 1234hello4321</p>
                        </div>
                    </div>
                </div>
            </div>
            <MyStudents />
        </div>
    )
}

export default CounselorProfile;