function MyInformation() {
    return (
        <>
            <h3 className = 'mb-3 mt-3 font-bold'>My Information</h3>
            <div className = 'border-2 border-gray-300 rounded pl-6 pt-6 pb-6 w-4/5 sm:w-96 relative'>
                <div className = 'w-3/5 mt-auto mb-auto'>
                    <div className ='absolute top-0 right-0 h-16 w-10 mt-2'>
                        Edit
                    </div>
                    <div className = 'text-xs'>
                        <div className = 'mb-3'>
                            <p className = 'inline-block mr-1'>Email:</p>
                            <p className = 'inline-block'>jatr912@gmail.com</p>
                        </div>

                        <div className = 'mb-3'>
                            <p className = 'inline-block mr-1'>Major(s):</p>
                            <p className = 'inline-block'>Computer Science</p>
                        </div>

                        <div>
                            <p className = 'inline-block mr-1'>Password:</p>
                            <p className = 'inline-block'>Will figure this out later</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyInformation;