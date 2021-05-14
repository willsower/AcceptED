import Image from 'next/image'

function Essay() {
    var essayName = 'University of Southern California';
    var due = 2;

    return (
        <div className = 'w-1/3 border-1 border-gray-200 rounded-lg bg-white shadow-lg h-60 mt-4 inline-block'>
            {/* Doc Image */}
            <div className = 'text-center'>
                <Image
                    priority
                    src="/images/sampleDoc_temp.png"
                    className = ''
                    height={140}
                    width={140}
                />
            </div>

            {/* Doc Details */}
            <div className = 'p-2'>
                <p className = 'text-xs text-gray-400'>Supplement</p>
                <h5 className = 'text-xs lg:text-sm'>{essayName}</h5>
                <div className = ''>
                    {/* Due date Image */}
                    <div className = 'w-14 h-5 bg-indigo-100 rounded'>
                        <div className = 'text-center'>
                            <div className = 'inline-block align-top'>
                                <Image
                                    priority
                                    src="/images/clock.png"
                                    className = ''
                                    height={10}
                                    width={10}
                                />
                            </div>

                            <p className = 'text-xxs inline-block ml-1 text-blue-700 align-middle mb-1'>{due} days</p>
                        </div>
                    </div>
                    {/* <div className = 'absolute'>
                        <Image
                            priority
                            src="/images/blue_rect_home.png"
                            className = ''
                            height={20}
                            width={50}
                        />
                        <div className = 'relative bottom-7 left-1'>
                            <Image
                                priority
                                src="/images/clock.png"
                                className = 'inline-block'
                                height={10}
                                width={10}
                            />

                            <p className = 'text-xxs inline-block ml-1 align-middle text-blue-700'>{due} days</p>
                        </div>
                    </div> */}

                    {/* Status of Essay */}
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Essay;