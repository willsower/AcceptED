import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from "react";

export const siteTitle = 'Sign-Up | AcceptED';

// Sign Up
export default function SignUp ({children, home}) {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [universityCode, setUniversityCpde] = useState('')
    const [password, setPassword] = useState('')

    const submitSignUpData = async (e) => {
        console.log("Line 20");
        
        e.preventDefault()
        try {
            const body = { fullName, email, universityCode, password }
            await fetch('/api/post', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(body),
            }).then(json =>{
                window.location.href = '/onboarding'
            })
          } catch (error) {
            console.error(error)
          }
    };

    console.log("line 36")

    return (
        <div className = 'h-screen'>
            <Head>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <main>
                <div className='flex flex-row h-full'>
                    {/* Left side of Sign Up Page */}
                    <div className='w-2/5 h-screen flex justify-center flex-col relative items-center bg-blue-600'>
                        {/* Image */}
                        <div className = 'absolute bottom-1 right-0 h-1/2 w-1/2'>
                            <Image
                                src='/images/SignUp/signup.svg'
                                alt='Signup'
                                layout = 'fill'
                                objectFit = ''
                            />
                        </div>

                        {/* Content */}
                        <div className = 'mb-24'>
                            <h1 className = 'text-xl md:text-3xl lg:text-4xl text-gray-50 font-semibold'>Welcome Consultant!</h1>
                            <h3 className = 'text-base md:text-xl text-gray-50 mt-4 font-semibold'>Let's get you started!</h3>

                            <div clasName = ''>
                                <div className = 'inline-block mr-4'>
                                    <Image
                                        src='/images/SignUp/FileText.svg'
                                        alt='Signup'
                                        height = '20'
                                        width = '20'
                                    />
                                </div>
                                <h4 className = 'text-base md:text-xl text-gray-50 mt-12 inline-block'>Sign Up</h4>
                            </div>


                            <div className = ''>
                                <div className = 'inline-block mr-4'>
                                    <Image
                                        src='/images/SignUp/MonitorPlay.svg'
                                        alt='Signup'
                                        height = '20'
                                        width = '20'
                                    />
                                </div>
                                <h4 className = 'text-base md:text-xl text-gray-50 mt-7 inline-block'>Watch Training Videos</h4>
                            </div>

                            <div className = ''>
                                <div className = 'inline-block mr-4'>
                                    <Image
                                        src='/images/SignUp/FileArrowUp.svg'
                                        alt='Signup'
                                        height = '20'
                                        width = '20'
                                    />
                                </div>
                                <h4 className = 'text-base md:text-xl text-gray-50 mt-7 inline-block'>Upload Onboarding Files</h4>
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
                            <form className='flex flex-col mt-2' onSubmit={submitSignUpData}>
                                <p className = 'text-sm md:text-base font-semibold'>Full Name</p>
                                <input autoFocus onChange={(e) => setFullName(e.target.value)} value={fullName} className='text-xs md:text-sm bg-gray-50 rounded p-2 flex-1 mb-4 border' id='fullName' type='fullName' placeholder='Enter first and last name'/>

                                <p className = 'text-sm md:text-base font-semibold'>Email</p>
                                <input autoFocus onChange={(e) => setEmail(e.target.value)} value={email} className='text-xs md:text-sm bg-gray-50 rounded p-2 flex-1 mb-4 border' id='email' type='email' aria-label='email address' placeholder='Enter school email address'/>

                                <p className = 'text-sm md:text-base font-semibold'>University Code</p>
                                <input autoFocus onChange={(e) => setUniversityCpde(e.target.value)} className=' text-xs md:text-sm bg-gray-50 rounded p-2 flex-1 mb-4 border' id='fullName' type='fullName' placeholder='Enter 4 digit university code'/>

                                <p className = 'text-sm md:text-base font-semibold'>Password</p>
                                <input autoFocus onChange={(e) => setPassword(e.target.value)} className=' text-xs md:text-sm bg-gray-50 rounded p-2 flex-1 mb-4 border' id='fullName' type='fullName' placeholder='Enter password(6-8 charachters)'/>

                                <Link href= {{ pathname:'onboarding'}}>
                                    <button onClick={submitSignUpData} className = 'w-20 bg-blue-600 text-white rounded md:w-28 p-1 m-auto'>
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

