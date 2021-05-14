import Image from 'next/image'
import Essay from './essay'

function RecentEssays() {
    // Change with dynamic essays
    var essays = ['Name'];

    return (
        <div className = 'w-11/12 md:w-full m-auto'>
            <h5 className = 'text-sm text-gray-600 mt-4'>Recent Essays</h5>
            {essays.length == 0 ?
                <>
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
                </>
                :
                <div className = ''>
                    <Essay />
                    <Essay />
                    <Essay />
                </div>
            }
        </div>
    );
}

export default RecentEssays;