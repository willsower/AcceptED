import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { useSession, getSession } from 'next-auth/client'

export const siteTitle = 'Create Account | AcceptED';

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context) {
    return {
      props: {
        session: await getSession(context)
      }
    }
}

export default function CreateAccount ({children, home}) {
    // Set account information
    const [fName, setFirstName] = useState('');
    const [lName, setLastName] = useState('');
    const [universityCode, setUniversityCode] = useState('');
    const [consultantCode, setConsultantCode] = useState('');
    const [educationConsultant, setEducationConsultant] = useState('');
    const [ session ] = useSession()
    const email = session.user.email;

    // State: Error messages for validation
    const [nameErrorMsg, setNameErrorMsg] = useState('');
    const [schoolCodeErrorMsg, setSchoolCodeErrorMsg] = useState('');
    const [submitWarning, setSubmitWarning] = useState('');

    // Function to handle radio button change
    const handleRadioChange = e => {
        const { value } = e.target;

        if (value == 'ec') {
            setEducationConsultant(true)
        } else {
            setEducationConsultant(false)
        }
    };

    // Function to validate first name and last name form fields
    function validateName(nameInput) {
        var errMsg = '';

        // INVALID: empty name field
        var name = String(nameInput)
        if (name.length == 0) {
            errMsg = 'Name cannot be empty. ';
        }

        // INVALID whitespace in name or F/L name has multiple words
        var stringArray = String(name).split(/(\s+)/);
        if (stringArray.length > 1) { 
            errMsg = errMsg + 'Invalid space in name. ';
        }

        // INVALID: name has non-alphabet characters 
        var letters = /^[A-Za-z]+$/;
        if(!(name.match(letters))) {
            errMsg = errMsg + 'Name Can Not Have Non-Alphabet Characters or numbers';
        }

        // Concatenate all errors
        if (errMsg.length != 0) {
            setNameErrorMsg(errMsg);
            return false;
        }

        // Valid Name
        setNameErrorMsg('');
        return true; 
    }

    // Function to validate school code field
    function validateSchoolCode (schoolCode) {
        // INVALID: school code is empty
        var schoolCodeStr = String(schoolCode)
        if (schoolCodeStr.length == 0) {
            setSchoolCodeErrorMsg(<p>University Code cannot be empty</p>);
            return false;

        // INVALID: University Code is not length 4
        } else if (schoolCodeStr.length < 4 || schoolCodeStr.length > 4) {
            setSchoolCodeErrorMsg(<p>University Code must have 4 digits</p>);
            return false;
        }

        // Valid University Code
        setSchoolCodeErrorMsg('');
        return true;
    }




    const submitSignUpData = async (e) => {
        e.preventDefault();
        console.log("Line 104")
        setSubmitWarning(<p>Line 106</p>)


        
        if(!validateName(fName) || !(validateName(lName)) || !(validateSchoolCode(universityCode))){ // check if data are valid
            setSubmitWarning(<p >There are error in the data you entered!</p>)
            return; 
        }

        
        



        try {
            const body = { fName, lName, email, universityCode, consultantCode, educationConsultant }
            await fetch('/api/db_scripts/create_user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
            }).then(json => {
                window.location.href = '/onboarding'
            })
        } catch (error) {
            console.error(error)
        }
    };

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
                        <div className ='absolute top-0 right-0 h-16 w-16 mt-2'>
                            LOGO
                        </div>
                        <div className = 'm-auto w-8/12'>
                            <h3 className = 'text-base md:text-2xl font-semibold mb-8'>Sign Up</h3>

                        {submitWarning}

                            {/* Sign-Up Form */}
                            <form className='flex flex-col mt-2' method = "POST" onSubmit={submitSignUpData}>
                                {nameErrorMsg}
                                <p className = 'text-sm md:text-base font-semibold'>Preferred First Name</p>
                                <input autoFocus onChange={(e) => setFirstName(e.target.value)} className='text-xs md:text-sm bg-gray-50 rounded p-2 flex-1 mb-4 border' type='text' placeholder='Enter preferred first name' required/>

                                {/* {nameErrorMsg} */}
                                <p className = 'text-sm md:text-base font-semibold'>Last Name</p>
                                <input autoFocus onChange={(e) => setLastName(e.target.value)} className='text-xs md:text-sm bg-gray-50 rounded p-2 flex-1 mb-4 border' type='text' placeholder='Enter last name' required/>

                                {schoolCodeErrorMsg}
                                <p className = 'text-sm md:text-base font-semibold'>University Code</p>
                                <input autoFocus onChange={(e) => setUniversityCode(e.target.value)} className=' text-xs md:text-sm bg-gray-50 rounded p-2 flex-1 mb-4 border' type='number' placeholder='Enter 4 digit university code' pattern = '[0-9]' required/>

                                <p className = 'text-sm md:text-base font-semibold'>Who are you?</p>
                                <p className = 'text-xs md:text-sm mt-1 mb-1'>I am a(n)...</p>
                                <div className = 'radio-buttons mb-2'>
                                    <input
                                        value = 'student'
                                        type = 'radio'
                                        className = 'mr-2'
                                        name = 'type'
                                        onChange = {handleRadioChange}
                                    />
                                    Student 
                                    <br/>
                                    <input
                                        value = 'ec'
                                        type = 'radio'
                                        className = 'mr-2'
                                        name = 'type'
                                        onChange = {handleRadioChange}
                                    />
                                    Education Consultant
                                </div>

                                {educationConsultant &&
                                    <>
                                        <p className = 'text-sm md:text-base font-semibold mt-4'>Enter Consultant Code</p>
                                        <input autoFocus onChange={(e) => setConsultantCode(e.target.value)} className=' text-xs md:text-sm bg-gray-50 rounded p-2 flex-1 mb-4 border' type='text' placeholder='Enter code given to you by admin' required/>
                                    </>
                                }

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