import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { Component , useState } from 'react'
import { useSession, signIn, signOut } from 'next-auth/client';

export const siteTitle = 'Create Account | AcceptED';

export default function LoginSignup ({children, home}) {
    const [session, loading] = useSession();

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

                            <div className = ''>
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
                        <div className ='absolute top-2 right-2 h-10 w-10 mt-2'>
                            <Image
                                src = '/images/accepted_logo.svg'
                                layout = 'fill'
                            />
                        </div>
                        <div className = 'm-auto w-8/12'>
                            <h3 className = 'text-base md:text-2xl font-semibold mb-2'>Login</h3>
                            {!session && <>
                                {/* Not signed in <br/> */}
                                <Image src = '/images/Icon/google_signin.png' width = '150' height = '40' className = 'cursor-pointer' onClick={() => signIn('google', { callbackUrl: 'http://localhost:3000/home' })}/>
                            </>}
                            {/* <Image src="/images/Icon/google_signin.png" alt="me" width="150" height="45" /> */}
                            <h3 className = 'text-base md:text-2xl font-semibold mb-2 mt-4'>Sign Up</h3>
                            {!session && <>
                                {/* Not signed in <br/> */}
                                <Image src = '/images/Icon/google_signin.png' width = '150' height = '40' className = 'cursor-pointer' onClick={() => signIn('google', { callbackUrl: 'http://localhost:3000/create_account' })}/>
                            </>}
                        </div>
                    </div>
                
                    { children }
                </div>
            </main>
        </div>
    );   
}