import React from "react";
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import 'dropzone/dist/dropzone.css';

import Footer from '../components/footer';

export const siteTitle = 'Onboarding | AcceptED';

// This is how many tasks the user will need to do for onboarding. How many pages?
const maxPage = 5;

// Consultant Onboarding - Upload Photo
export default function Onboarding({children, home}) {
    const { useState } = React;
    const [currentPage, setCurrentPage] = useState('1');

    var percentage = 100 - ((100 / maxPage) * (maxPage - currentPage));

    // Helper video onboard shell
    function videoOnboard(videoName, video, page) {
        return (
            <div className = 'm-auto w-4/5 flex flex-col'>
                {/* Header Portion */}
                <h1 className = 'text-3xl text-blue-600 mb-2 text-center mt-8 font-black'>Welcome, [Name]!</h1>
                <h3 className = "text-lg font-black text-center">Watch a short training video</h3>
                <h6 className = 'text-xs font-black text-center mt-4'>{videoName}</h6>

                {/* Video Portion */}
                <div className = 'text-center'>
                    {video}
                </div>

                {/* Next/Skip For Now */}
                <div className = 'm-auto text-center'>
                    <button className = 'bg-blue-600 text-white rounded w-full p-1 mt-4' onClick={() => setCurrentPage(page)}>
                        Next
                    </button>
                    <button className = '' onClick={() => setCurrentPage(page)}>
                        <p className = 'text-xs mt-3 hover:underline hover:cursor-pointer'><a className = "text-blue-600 font-black">Skip for now</a></p>
                    </button>
                </div>
            </div>
        );
    }

    // Training Video
    // 1. How to Edit Your Student's Essays
    function onboardOne() {
        return (
            <>
                {videoOnboard("1. How to Edit Your Student's Essays", 'video.com', 2)}
            </>
        );
    }

    // Training Video
    // 2. How to Deal with Different Scenarios
    function onboardTwo() {
        return (
            <>
                {videoOnboard("2. How to Deal with Different Scenarios", 'video.com', 3)}
            </>
        );
    }

    // Uploading Profile Image
    function onboardThree() {
        return (
            <div className = 'm-auto w-4/5 flex flex-col'>
                <h3 className = "text-xl font-semibold text-center">Let's upload your profile photo</h3>
                <div className="dropzone dropzone-single" id="dropzone-single">
                    <div className="fallback">
                        <div className="custom-file">
                            <input
                            className="custom-file-input"
                            id="projectCoverUploads"
                            type="file"
                            />
                            <label className="custom-file-label m-auto" htmlFor="projectCoverUploads">
                            Choose file
                            </label>
                        </div>
                    </div>

                    <div className="dz-preview dz-preview-single">
                        <div className="dz-preview-cover">
                            <img alt="..." className="dz-preview-img" data-dz-thumbnail="" />
                        </div>
                    </div>
                </div>

                {/* Next/Skip For Now */}
                <div className = 'm-auto text-center'>
                    <button className = 'bg-blue-600 text-white rounded w-full p-1 mt-4' onClick={() => setCurrentPage('4')}>
                        Next
                    </button>
                    <button className = '' onClick={() => setCurrentPage('4')}>
                        <p className = 'text-xs mt-3 hover:underline hover:cursor-pointer'><a className = "text-blue-600 font-black">Skip for now</a></p>
                    </button>
                </div>
            </div>
        );
    }

    // Upload a valid ID
    function onboardFour() {
        return (
            <div className = 'm-auto w-4/5 flex flex-col'>
                <h3 className = "text-xl font-semibold text-center">Upload a valid ID</h3>
                <div className="dropzone dropzone-single" id="dropzone-single">
                    <div className="fallback">
                        <div className="custom-file">
                            <input
                            className="custom-file-input"
                            id="projectCoverUploads"
                            type="file"
                            />
                            <label className="custom-file-label m-auto" htmlFor="projectCoverUploads">
                            Choose file
                            </label>
                        </div>
                    </div>

                    <div className="dz-preview dz-preview-single">
                        <div className="dz-preview-cover">
                            <img alt="..." className="dz-preview-img" data-dz-thumbnail="" />
                        </div>
                    </div>
                </div>

                {/* Next/Skip For Now */}
                <div className = 'm-auto text-center'>
                    <button className = 'bg-blue-600 text-white rounded w-full p-1 mt-4' onClick={() => setCurrentPage('5')}>
                        Next
                    </button>
                    <button className = '' onClick={() => setCurrentPage('5')}>
                        <p className = 'text-xs mt-3 hover:underline hover:cursor-pointer'><a className = "text-blue-600 font-black">Skip for now</a></p>
                    </button>
                </div>
            </div>
        );
    }

    // Finished Onboarding Page
    function finishedOnboarding() {
        return (
            <div>
                <div className = 'w-4/5 pt-4 flex flex-col pb-20 m-auto'>
                    <div className = 'w-60 h-60 relative m-auto'>
                        <Image
                            src="/images/temp_onboarding.png"
                            alt="Picture of blue checkmark"
                            layout="fill"
                        />
                    </div>

                    <h3 className = 'text-4xl font-semibold text-center mt-8'>Onboarding Complete!</h3>
                    <Link href = '/dashboard'>
                        <button className = 'bg-blue-600 text-white rounded w-28 p-1 ml-auto mr-auto mt-4'>
                                Finish
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    const renderPage = () => {
        if (currentPage == '1') {
            return onboardOne();
        } else if (currentPage == '2') {
            return onboardTwo();
        } else if (currentPage == '3') {
            return onboardThree();
        } else if (currentPage == '4') {
            return onboardFour();
        } else if (currentPage == '5') {
            return finishedOnboarding();
        }
    }

    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>{ siteTitle }</title>
            </Head>
            <main>
                <div className = 'min-h-screen relative'>
                    <div className = 'm-auto w-4/5 pt-16 flex flex-col pb-20'>
                        {/* Progress Bar */}
                        <div>
                            <ProgressBar
                            percent={percentage}
                            filledBackground="linear-gradient(to right, #1E5DD6, #0AB0A5)"
                            >
                            </ProgressBar>

                            {/* Progress Bar Sections */}
                            <div className = 'mt-3 font-black text-sm'>
                                <h5 className = 'inline-block float-left w-1/3'>Training</h5>
                                <h5 className = 'inline-block w-1/3 text-center'>Upload Files</h5>
                                <h5 className = 'inline-block float-right w-1/3 text-right'>Background Check</h5>
                            </div>
                        </div>
                        {renderPage()}
                        { children }
                    </div>
                    <Footer />
                </div>
            </main>
        </div>
    );
}
