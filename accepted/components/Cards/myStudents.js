// For the counselor this is the MyStudents Card
function MyStudents() {
    return (
        <div>
            <div className = 'border-2 border-gray-300 rounded p-4 w-4/5 ml-auto mr-auto mt-8 relative'>
                <div className = 'table-row'>
                    <h3 className = 'table-cell font-semibold text-lg py-1'>My Student(s)</h3>
                    <button className = 'table-cell absolute top-2 right-2'>Add</button>
                </div>
                <div className = 'flex flex-row'>
                    <div className = 'w-1/5 mt-4'>
                        Img Here
                    </div>
                    <div className = 'w-4/5 ml-auto mr-auto mt-4'>
                        <div className = 'table w-full ...'>
                            <div className = 'table-row-group'>
                                <div className = 'table-row text-sm'>
                                    <p className = 'table-cell py-2'>First name: Taichen</p>
                                    <p className = 'table-cell'>Last Name: Rose</p>
                                </div>
                                <div className = 'table-row text-sm'>
                                    <p className = 'table-cell py-2'>Email: jatr812@gmail.com</p>
                                    <p className = 'table-cell'>School: Western Washington University</p>
                                </div>
                                <div className = 'table-row text-sm'>
                                    <p className = 'table-cell py-2'>Clubs/Student Organizations</p>
                                </div>
                                <div className = 'table-row text-sm'>
                                    <p className = 'table-cell py-2'>Chess Club</p>
                                    <p className = 'table-cell py-2'>Joined: 3-5-2019</p>
                                    <p className = 'table-cell py-2'>Position: N/A</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyStudents;