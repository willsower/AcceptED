import Image from 'next/image';

function Home() {
    return (
        <div className = 'w-full h-auto'>
            {/* Module List */}
            <div className = 'border-1 border-gray-200 rounded-lg flex flex-row bg-white shadow-lg w-11/12 h-12 m-auto mt-8'>

                {/* Module Card */}
                <div className = 'inline-block h-8 w-20 bg-gray-100 rounded text-xs md:text-sm text-center mt-auto mb-auto ml-2 text-gray-400'>
                    <button className = 'mt-2'>
                        Module 1
                    </button>
                </div>
            </div>

            {/* Everything Below the Module List */}
            <div className = 'md:flex md:w-11/12 m-auto h-auto'>
                {/* Left Chunk */}
                <div className = 'md:w-8/12 lg:w-9/12 h-auto'>
                    {/*  Recent Essays */}
                    <div className = 'w-11/12 md:w-full m-auto'>
                        <h5 className = 'text-sm text-gray-600 mt-4'>Recent Essays</h5>
                        <div className = 'border-1 border-gray-200 rounded-lg flex flex-row bg-white shadow-lg w-full h-60 mt-4'>
                            <div className = 'm-auto'>
                                <Image
                                    priority
                                    src="/images/recent_essays_temp.png"
                                    className = ''
                                    height={140}
                                    width={140}
                                />
                                <div className = 'text-center'>
                                    <h3 className = 'font-semibold text-gray-600'>No essays assigned yet.</h3>
                                    <p className = 'text-xs text-blue-600 font-semibold'>Assign an Essay in Tasks &gt;</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Split */}
                    <div className = 'lg:flex lg:flex-row lg:w-full lg:m-auto'>
                        {/* Left */}
                        <div className = 'lg:w-1/2 w-11/12 md:w-full m-auto'>
                            {/* Latest Materials */}
                            <h5 className = 'text-sm text-gray-600 mt-4'>Latest Materials</h5>
                            <div className = 'border-1 border-gray-200 rounded-lg flex flex-row bg-white shadow-lg w-full h-60 m-auto mt-4'>
                                <div className = 'm-auto'>
                                    <Image
                                        priority
                                        src="/images/resources_temp.png"
                                        className = ''
                                        height={140}
                                        width={200}
                                    />
                                    <div className = 'text-center'>
                                        <h3 className = 'font-semibold text-gray-600'>No resources or curriculum yet.</h3>
                                        <p className = 'text-xs text-blue-600 font-semibold'>Upload them in Materials &gt;</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right */}
                        <div className = 'lg:w-1/2 w-11/12 md:w-full m-auto lg:ml-4'>
                            {/* Updates */}
                            <h5 className = 'text-sm text-gray-600 mt-4'>Updates</h5>
                            <div className = 'border-1 border-gray-200 rounded-lg flex flex-row bg-white shadow-lg w-full h-60 m-auto mt-4'>
                                <div className = 'm-auto'>
                                    <Image
                                        priority
                                        src="/images/updates_temp.png"
                                        className = ''
                                        height={140}
                                        width={200}
                                    />
                                    <div className = 'text-center'>
                                        <h3 className = 'font-semibold text-gray-600'>No updates so far...keep an eye out!</h3>
                                    </div>
                                </div>
                            </div>

                            {/* Tasks */}
                            {/* <div className = 'border-1 border-gray-200 rounded-lg relative flex flex-row bg-white shadow-lg w-11/12 h-60 m-auto mt-4'>

                            </div> */}
                        </div>
                    </div>
                </div>

                {/* Right Chunk (this weeks schedule/tasks) */}
                <div className = 'md:w-4/12 lg:w-3/12 md:ml-4'>
                    <h5 className = 'text-sm text-gray-600 md:ml-0 ml-6 mt-4'>This Week's Schedule</h5>
                    {/* Calendar */}
                    <div className = 'border-1 border-gray-200 rounded-lg bg-white shadow-lg w-11/12 md:w-full h-36 mt-4 m-auto'>
                            Stuff
                    </div>

                    {/* Meetings? */}
                    <div className = 'border-1 border-gray-200 rounded-lg flex flex-row bg-white shadow-lg w-11/12 md:w-full h-52 mt-4 m-auto'>
                        <div className = 'm-auto'>
                            <Image
                                priority
                                src="/images/events_temp.png"
                                className = ''
                                height={100}
                                width={140}
                            />
                            <div className = 'text-center'>
                                <h3 className = 'font-semibold text-gray-600'>No events this week!</h3>
                                <p className = 'text-xs text-blue-600 font-semibold'>Add an Event &gt;</p>
                            </div>
                        </div>
                    </div>      

                    {/* My Tasks */}
                    <h5 className = 'text-sm text-gray-600 ml-6 mt-4 md:ml-0'>My Tasks</h5>
                    <div className = 'border-1 border-gray-200 rounded-lg flex flex-row bg-white shadow-lg w-11/12 md:w-full h-52 mt-4 m-auto'>
                        <div className = 'm-auto'>
                            <Image
                                priority
                                src="/images/mytasks_temp.png"
                                className = ''
                                height={140}
                                width={200}
                            />
                            <div className = 'text-center'>
                                <h3 className = 'font-semibold text-gray-600'>No tasks yet</h3>
                                <p className = 'text-xs text-blue-600 font-semibold'>Add a Task &gt;</p>
                            </div>
                        </div>
                    </div>              
                </div>
            </div>
        </div>
    );
}

export default Home;