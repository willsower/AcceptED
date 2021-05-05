import Link from 'next/link';
import Image from 'next/image'

// Onboarding Footer
function Nav() {
    return (
        <div className = 'fixed border-r border-gray-200 sm:w-36 h-screen'>
            {/* Profile Picture */}
            <div className = 'mt-2'>
                <div className = 'p-4 sm:pl-9 sm:pr-9'>
                    <Image
                        priority
                        src="/images/logo_temp.png"
                        className = ''
                        height={100}
                        width={100}
                    />
                </div>
            </div>

            {/* Navigation */}
            <div className = ''>
                {/* Home */}
                <Link href = '/'>
                    <div className = 'w-full sm:h-12 p-2 sm:p-4 m-auto align-middle hover:bg-blue-50 active:bg-blue-50'>
                        <div className = 'inline-block align-middle mr-1 sm:mr-3'>
                            <Image
                                priority
                                src="/images/home_temp.png"
                                className = ''
                                height={20}
                                width={20}
                            />
                        </div>
                        <div className = 'text-xs sm:text-base inline-block text-gray-400'>
                            Home
                        </div>
                    </div>
                </Link>

                {/* Message */}
                <Link href = '/'>
                    <div className = 'w-full sm:h-12 p-2 sm:p-4 m-auto hover:bg-blue-50 active:bg-blue-50'>
                        <div className = 'inline-block align-middle mr-1 sm:mr-3'>
                            <Image
                                priority
                                src="/images/messages_temp.png"
                                className = ''
                                height={20}
                                width={20}
                            />
                        </div>
                        <div className = 'text-xs sm:text-base inline-block text-gray-400'>
                            Messages
                        </div>
                    </div>
                </Link>

                {/* Materials */}
                <Link href = '/'>
                    <div className = 'w-full sm:h-12 p-2 sm:p-4 m-auto hover:bg-blue-50 active:bg-blue-50'>
                        <div className = 'inline-block align-middle mr-1 sm:mr-3'>
                            <Image
                                priority
                                src="/images/materials_temp.png"
                                className = ''
                                height={20}
                                width={20}
                            />
                        </div>
                        <div className = 'text-xs sm:text-base inline-block text-gray-400'>
                            Materials
                        </div>
                    </div>
                </Link>

                {/* Tasks */}
                <Link href = '/'>
                    <div className = 'w-full sm:h-12 p-2 sm:p-4 m-auto hover:bg-blue-50 active:bg-blue-50'>
                        <div className = 'inline-block align-middle mr-1 sm:mr-3'>
                            <Image
                                priority
                                src="/images/tasks_temp.png"
                                className = ''
                                height={20}
                                width={20}
                            />
                        </div>
                        <div className = 'text-xs sm:text-base inline-block text-gray-400'>
                            Tasks
                        </div>
                    </div>
                </Link>

                {/* Profile */}
                <Link href = '/dashboardShell'>
                    <div className = 'w-full sm:h-12 p-2 sm:p-4 m-auto hover:bg-blue-50 active:bg-blue-50'>
                        <div className = 'inline-block align-middle mr-1 sm:mr-3'>
                            <Image
                                priority
                                src="/images/profileico_temp.png"
                                className = ''
                                height={20}
                                width={20}
                            />
                        </div>
                        <div className = 'text-xs sm:text-base inline-block text-gray-400'>
                            Profile
                        </div>
                    </div>
                </Link>

                {/* Logout */}
                <Link href = '/'>
                    <div className = 'w-full sm:h-12 p-2 sm:p-4 m-auto hover:bg-blue-50 active:bg-blue-50'>
                        <div className = 'inline-block align-middle mr-1 sm:mr-3'>
                            <Image
                                priority
                                src="/images/logout_temp.png"
                                className = ''
                                height={20}
                                width={20}
                            />
                        </div>
                        <div className = 'text-xs sm:text-base inline-block text-gray-400'>
                            Log Out
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Nav;