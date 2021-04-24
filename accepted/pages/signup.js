import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export const siteTitle = 'Sign-Up | AcceptED';

// Sign Up
export default function SignUp({children, home}) {
    return (
        <div className = 'h-screen'>
            <Head>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main>
                <div className='flex flex-row h-full'>
                    {/* Image - Left */}
                    <div className='w-2/5 h-screen flex justify-center flex-col relative items-center'>
                        <Image
                            src='/images/signupTemp.jpeg'
                            alt='Picture of the author'
                            layout='fill'
                            objectFit='cover'
                        />
                        <div className = 'absolute relative block'>
                            <div className = 'block mb-12 sm:mb-16 md:mb-24'>
                                <h1 className = 'text-xl md:text-3xl lg:text-4xl text-gray-50 font-semibold'>Welcome Student!</h1>
                                <h3 className = 'text-base md:text-xl text-gray-50 mt-4 font-semibold'>Let's get you started!</h3>
                                <h4 className = 'text-base md:text-xl text-gray-50 mt-12'>Sign Up</h4>
                                <h4 className = 'text-base md:text-xl text-gray-50 mt-7'>Watch Training Videos</h4>
                                <h4 className = 'text-base md:text-xl text-gray-50 mt-7'>Upload Onboarding Files</h4>
                            </div>
                        </div>
                    </div>

                    {/* Sign Up Screen - Right */}
                    <div className='w-3/5 h-screen flex flex-col relative'>
                        {/* Logo */}
                        <div className ='absolute top-0 right-0 h-16 w-16 mt-2'>
                            LOGO
                        </div>
                        <div className = 'm-auto w-8/12'>
                            <h3 className = 'text-base md:text-2xl font-semibold mb-8'>Sign Up</h3>

                            {/* Sign-Up Form */}
                            <form className='flex flex-col mt-2'>
                                <p className = 'text-sm md:text-base font-semibold'>Full Name</p>
                                <input className='text-xs md:text-sm bg-gray-50 rounded p-2 flex-1 mb-4 border' id='fullName' type='fullName' placeholder='Enter first and last name'/>

                                <p className = 'text-sm md:text-base font-semibold'>Email</p>
                                <input className='text-xs md:text-sm bg-gray-50 rounded p-2 flex-1 mb-4 border' id='email' type='email' aria-label='email address' placeholder='Enter school email address'/>

                                <p className = 'text-sm md:text-base font-semibold'>University Code</p>
                                <input className=' text-xs md:text-sm bg-gray-50 rounded p-2 flex-1 mb-4 border' id='fullName' type='fullName' placeholder='Enter 4 digit university code'/>

                                <p className = 'text-sm md:text-base font-semibold'>Password</p>
                                <input className=' text-xs md:text-sm bg-gray-50 rounded p-2 flex-1 mb-4 border' id='fullName' type='fullName' placeholder='Enter password(6-8 charachters)'/>

                                <Link href= {{ pathname:'onboarding'}}>
                                    <button className = 'w-20 bg-blue-600 text-white rounded md:w-28 p-1 m-auto'>
                                        Sign Up
                                    </button>
                                </Link>

                                <Link href=''>
                                    <p className = 'm-auto text-xs mt-2'>Already have an account? <a className = 'text-blue-600'>Sign in</a></p>
                                </Link>
                            </form>
                        </div>
                    </div>
                
                    { children }
                </div>
            </main>
        </div>
    );
}
