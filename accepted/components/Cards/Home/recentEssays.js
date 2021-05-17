import Image from 'next/image'

function RecentEssays({essays}) {

    // Should be a max of 3 essays here
    // Get using dynamic call
    var essays = [];
    var tempStatus = 'Done';

    return (
        <div className = 'w-11/12 md:w-full m-auto'>
            <h5 className = 'text-sm text-gray-600 mt-4'>Recent Essays</h5>
            {essays.length == 0 ?
                <>
                    <div className = 'border-1 border-gray-200 rounded-lg flex flex-row bg-white shadow-lg w-full h-60 mt-4'>
                        <div className = 'm-auto'>
                            <Image
                                priority
                                src="/images/Home/recent_essay_empty.svg"
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
                </>
                :
                <div className = 'w-11/12 md:w-full flex'>

                    {/* Loop through all 3 recent essays populating information under variable 'es' */}
                    {essays.map((es) => (
                        <div className = 'ml-2 border-1 border-gray-200 rounded-lg bg-white shadow-lg h-60 mt-4 inline-block'>
                            {/* Doc Image */}
                            <div className = 'text-center'>
                                <Image
                                    priority
                                    src="/images/Home/recent_essay.svg"
                                    className = ''
                                    height={90}
                                    width={180}
                                />
                            </div>

                            {/* Doc Details */}
                            <div className = 'p-2'>
                                <p className = 'text-xs text-gray-400'>{/*es.type*/}Supplement</p>
                                <h5 className = 'text-xs lg:text-base mt-1 sm:mt-0 md:mt-1 lg:mt-0'>{/*es.name*/}Western Washington University</h5>

                                {/* Essay Status / Dude Date */}
                                <div className = 'mt-1 lg:mt-1'>
                                    {/* Due date Image */}
                                    <div className = 'w-14 h-6 bg-indigo-100 rounded inline-block'>
                                        <div className = 'text-center h-full'>
                                            <div className = 'inline-block h-full'>
                                                <Image
                                                    priority
                                                    src="/images/Home/clock.svg"
                                                    className = ''
                                                    height={10}
                                                    width={10}
                                                />
                                            </div>

                                            <p className = 'text-xxs inline-block ml-1 text-blue-700 align-middle'>{/*es.due*/}2 days</p>
                                        </div>
                                    </div>
                                    {/* Status of Essay */}
                                    {/* Done */}
                                    {/*es.status*/ tempStatus == 'Done' && (
                                        <div className = 'w-10 h-6 border rounded inline-block ml-2 align-middle text-center'>
                                            <div className = 'text-green-700 text-xxs align-middle inline-block'>
                                                Done
                                            </div>
                                        </div>
                                    )}

                                    {/* In Progress */}
                                    {/*es.status*/ tempStatus == 'In Progress' && (
                                        <div className = 'w-14 h-6 border rounded inline-block ml-2 align-middle text-center'>
                                            <div className = 'text-yellow-500 text-xxs align-middle inline-block'>
                                                In Progress
                                            </div>
                                        </div>
                                    )}

                                    {/* Not Started */}
                                    {/*es.status*/ tempStatus == 'Not Started' && (
                                        <div className = 'w-16 h-6 border rounded inline-block ml-2 align-middle text-center'>
                                            <div className = 'text-red-600 text-xxs align-middle inline-block'>
                                                Not Started
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Task Details */}
                                <button className = 'w-full m-auto mt-3 rounded bg-blue-600 text-white text-xs p-2 sm:mt-2 md:mt-3 lg:mt-1'>See Task Details</button>
                            </div>
                        </div>
                    ))}
                </div>
            }
        </div>
    );
}

export default RecentEssays;