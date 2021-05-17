import Image from 'next/image';

function LatestMaterials() {
    return (
        <>
            <h5 className = 'text-sm text-gray-600 mt-4'>Latest Material</h5>
            <div className = 'border-1 border-gray-200 rounded-lg flex flex-row bg-white shadow-lg w-full h-60 m-auto mt-4'>
                
                <div className = 'm-auto'>
                    <Image
                        priority
                        src="/images/Home/latest_materials_empty.svg"
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
        </>
    );
}

export default LatestMaterials;