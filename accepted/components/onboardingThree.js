import React from "react";
import Link from "next/link"
import Footer from '../components/footer'

function OnboardingThree() {
    // Consultant Onboarding - Upload Photo
    return (
        <div className = 'min-h-screen relative'>
            <div className = 'm-auto w-4/5 pt-4 flex flex-col pb-20'>
                <h3 className = "text-xl font-semibold text-center">Please upload the following documents</h3>

                <div className= 'm-auto'>
                    <h5 className = 'text-center font-semibold text-base mt-4'>Document #1</h5>

                    <div className="bg-white px-2">
                        <div className="max-w-md mx-auto rounded-lg overflow-hidden md:max-w-xl">
                            <div className="md:flex">
                                <div className="w-32 p-3 m-auto">
                                    <div className="relative border-dotted h-24 rounded-lg border-dashed border-2 border-gray-300 bg-gray-100 flex justify-center items-center">
                                        <div className="absolute">
                                            <div className="flex flex-col items-center"> 
                                                <i className="fa fa-folder-open fa-4x text-blue-700"></i> 
                                                <span className="block text-gray-400 font-normal">Upload</span> </div>
                                        </div> 
                                        <input type="file" className="h-full w-full opacity-0 cursor-pointer" name=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button className = 'bg-blue-600 text-white rounded w-28 p-1 ml-auto mr-auto mt-8'>
                        Next
                </button>
            </div>

            <Footer />
        </div>
    );
}

export default OnboardingThree;