import Link from 'next/link';

// Onboarding Footer
function Nav() {
    return (
        <>
            {/* Profile Picture */}
            <div className = 'mt-12'>
                <div className = 'box-content w-4 h-4 p-4 bg-gray-50 rounded-full m-auto'>
                    
                </div>
            </div>

            {/* Navigation */}
            <div className = 'mt-16'>
                {/* Home */}
                <Link href = '/'>
                    <div className = 'box-content w-3 h-3 p-4 bg-gray-50 rounded-sm m-auto mb-8'>
                            
                    </div>
                </Link>

                {/* Message */}
                <Link href = '/'>
                    <div className = 'box-content w-3 h-3 p-4 bg-gray-50 rounded-sm m-auto mb-8'>
                        
                    </div>
                </Link>

                {/* Materials */}
                <Link href = '/'>
                    <div className = 'box-content w-3 h-3 p-4 bg-gray-50 rounded-sm m-auto mb-8'>
                        
                    </div>
                </Link>

                {/* Writing */}
                <Link href = '/'>
                    <div className = 'box-content w-3 h-3 p-4 bg-gray-50 rounded-sm m-auto mb-8'>
                        
                    </div>
                </Link>

                {/* Profile */}
                <Link href = '/'>
                    <div className = 'box-content w-3 h-3 p-4 bg-gray-50 rounded-sm m-auto mb-8'>
                        
                    </div>
                </Link>
            </div>
        </>
    );
}

export default Nav;