// Counselor profile information

function CounselorProfile() {
    return (
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
    )
}

export default CounselorProfile;