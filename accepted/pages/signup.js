import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export const siteTitle = 'Sign-Up | AcceptED'

// General Nav Layout
export default function Layout({children, home}) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <div className="flex flex-row">
                    {/* Image - Left */}
                    <div className="w-2/5 h-screen flex justify-center flex-col relative">
                        <Image
                            src="/images/signup.jpg"
                            alt="Picture of the author"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>

                    {/* Sign Up Screen - Right */}
                    <div className="w-3/5 h-screen flex flex-col relative">
                        {/* Logo */}
                        <div class="absolute top-0 right-0 h-16 w-16 mt-2">
                            LOGO
                        </div>
                        <div className = "m-auto w-8/12">
                            <h1 className = "text-3xl text-blue-600 mb-2">Welcome Consultant!</h1>
                            <h3 className = "text-xl font-semibold">Let's get you started!</h3>

                            {/* Sign-Up Form */}
                            <form className='flex flex-col mt-2'>
                                <p>Full name</p>
                                <input className='bg-gray-200 rounded p-1 flex-1 mb-4' id='fullName' type='fullName'/>

                                <p>School email address</p>
                                <input className='bg-gray-200 rounded p-1 flex-1 mb-4' id='email' type='email' aria-label='email address'/>

                                <p>University code</p>
                                <input className='bg-gray-200 rounded p-1 flex-1 mb-4' id='fullName' type='fullName'/>

                                <p>Password (6-18 charachters)</p>
                                <input className='bg-gray-200 rounded p-1 flex-1 mb-4' id='fullName' type='fullName'/>

                                <button className = 'bg-blue-600 text-white rounded w-28 p-1 m-auto'>
                                    Sign Up
                                </button>

                                <Link href="">
                                    <p className = 'm-auto text-xs mt-2'>Already have an account? <a className = "text-blue-600">Sign in</a></p>
                                </Link>
                            </form>
                        </div>
                    </div>
                
                    { children }
                </div>
            </main>
        </div>
    )
}
