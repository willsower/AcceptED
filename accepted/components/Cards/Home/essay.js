import Image from 'next/image'

function Essay() {
    var name = 'University of Southern California';
    var due = 2;
    var essayStatus = 'Not Started';
    var type = 'Supplement';

    // Conditional rendering for different colors of essay status
    const essayStatusPage = () => {
        if (essayStatus == 'Done') {
            return (
                <div className = 'w-10 h-6 border rounded inline-block ml-2 align-middle text-center'>
                    <div className = 'text-green-700 text-xxs align-middle inline-block'>
                        Done
                    </div>
                </div>
            );
        } else if (essayStatus == 'In Progress') {
            return (
                <div className = 'w-14 h-6 border rounded inline-block ml-2 align-middle text-center'>
                    <div className = 'text-yellow-500 text-xxs align-middle inline-block'>
                        In Progress
                    </div>
                </div>
            );
        } else if (essayStatus == 'Not Started') {
            return (
                <div className = 'w-16 h-6 border rounded inline-block ml-2 align-middle text-center'>
                    <div className = 'text-red-600 text-xxs align-middle inline-block'>
                        Not Started
                    </div>
                </div>
            );
        }
    }
    return (
        <div className = 'w-1/3 border-1 border-gray-200 rounded-lg bg-white shadow-lg h-60 mt-4 inline-block'>
            {/* Doc Image */}
            <div className = 'text-center'>
                <Image
                    priority
                    src="/images/sampleDoc_temp.png"
                    className = ''
                    height={90}
                    width={170}
                />
            </div>

            {/* Doc Details */}
            <div className = 'p-2'>
                <p className = 'text-xs text-gray-400'>{type}</p>
                <h5 className = 'text-xs lg:text-base mt-1 sm:mt-0 md:mt-1 lg:mt-0'>{name}</h5>

                {/* Essay Status / Dude Date */}
                <div className = 'mt-1 lg:mt-1'>
                    {/* Due date Image */}
                    <div className = 'w-14 h-6 bg-indigo-100 rounded inline-block'>
                        <div className = 'text-center h-full'>
                            <div className = 'inline-block h-full'>
                                <Image
                                    priority
                                    src="/images/clock.png"
                                    className = ''
                                    height={10}
                                    width={10}
                                />
                            </div>

                            <p className = 'text-xxs inline-block ml-1 text-blue-700 align-middle'>{due} days</p>
                        </div>
                    </div>
                    {/* Status of Essay */}
                    {essayStatusPage()}
                </div>

                {/* Task Details */}
                <button className = 'w-full m-auto mt-3 rounded bg-blue-600 text-white text-xs p-2 sm:mt-2 md:mt-3 lg:mt-1'>See Task Details</button>
            </div>
        </div>
    );
}

export default Essay;