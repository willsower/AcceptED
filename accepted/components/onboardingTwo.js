import React from "react";
import Link from "next/link"
import Footer from '../components/footer'
import ReactPlayer from 'react-player';

function OnboardingTwo() {
    // Consultant Onboarding - Upload Photo
    return (
        <div className = 'min-h-screen relative'>
            <div className = 'm-auto w-4/5 pt-4 flex flex-col pb-20'>
                <h1 className = 'text-3xl text-blue-600 mb-2 text-center'>Welcome, [Name]!</h1>
                <h3 className = "text-xl font-semibold text-center">Watch a short training video</h3>
                <h5 className = 'text-center text-base mt-4'>How to Engage Your Student</h5>

                <div className= 'm-auto'>
                    <ReactPlayer 
                        url="https://www.youtube.com/watch?v=ndsaoMFz9J4" 
                    />
                </div>

                <button className = 'bg-blue-600 text-white rounded w-28 p-1 ml-auto mr-auto mt-8'>
                        Next
                </button>

                <Link href="">
                    <p className = 'text-xs mt-2 underline ml-auto mr-auto'><a className = "text-blue-600">Skip for now</a></p>
                </Link>
            </div>

            <Footer />
        </div>
    );
}

export default OnboardingTwo;