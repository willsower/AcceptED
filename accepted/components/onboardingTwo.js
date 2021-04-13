import React from "react";
import Link from "next/link"
import 'dropzone/dist/dropzone.css'
import Footer from '../components/footer'

function OnboardingTwo() {
    // Consultant Onboarding - Upload Photo
    return (
        <div className = 'min-h-screen relative'>
            <div className = 'm-auto w-4/5 pt-4 flex flex-col pb-20'>
                <h1 className = 'text-3xl text-blue-600 mb-2 text-center'>Welcome, [Name]!</h1>
                <h3 className = "text-xl font-semibold text-center">Let's upload your photo</h3>

                <div className="dropzone dropzone-single">

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