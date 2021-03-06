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
export default function Onboarding() {
    const { useState } = React;
    const [currentPage, setCurrentPage] = useState('1');
    var percentage = 100 - ((100 / maxPage) * (maxPage - currentPage));

    // Next/Skip Button Helper
    function nextSkip(page) {
        return (
            <>
                {/* Next/Skip For Now */}
                <div className = 'm-auto text-center'>
                    <button className = 'bg-blue-600 text-white rounded w-full p-1 mt-4' onClick={() => setCurrentPage(page)}>
                        Next
                    </button>
                    <button className = '' onClick={() => setCurrentPage(page)}>
                        <p className = 'text-xs mt-3 hover:underline hover:cursor-pointer'><a className = "text-blue-600 font-black">Skip for now</a></p>
                    </button>
                </div>
            </>
        );
    }

// Helper method for uploading 
function fileUploadOnboard(title, page) {
    // React.useEffect(async () => {
    //     // we make a dynamic import for the Dropzone, as this component is not made to work on SSR
    //     const Dropzone = (await import("dropzone")).default;
    //     Dropzone.autoDiscover = false;
    //     // this variable is to delete the previous image from the dropzone state
    //     // it is just to make the HTML DOM a bit better, and keep it light
    //     let currentSingleFile = undefined;
    //     // single dropzone file - accepts only images
    //     new Dropzone(document.getElementById("dropzone-single"), {
    //       url: "/",
    //       thumbnailWidth: null,
    //       thumbnailHeight: null,
    //       previewsContainer: document.getElementsByClassName(
    //         "dz-preview-single"
    //       )[0],
    //       previewTemplate: document.getElementsByClassName("dz-preview-single")[0]
    //         .innerHTML,
    //       maxFiles: 1,
    //       acceptedFiles: "image/*",
    //       init: function () {
    //         this.on("addedfile", function (file) {
    //           if (currentSingleFile) {
    //             this.removeFile(currentSingleFile);
    //           }
    //           currentSingleFile = file;
    //         });
    //       },
    //     });
    //     document.getElementsByClassName("dz-preview-single")[0].innerHTML = "";
    //   }, []);

    return (
        <div className = 'm-auto w-4/5 flex flex-col mt-14 mb-8'>
            <h3 className = "text-xl font-semibold text-center">{title}</h3>
            <div className="dropzone dropzone-single" id="dropzone-single">
                <div className="dz-preview dz-preview-single">
                    <div className="dz-preview-cover">
                        <img alt="..." className="dz-preview-img hidden" data-dz-thumbnail="" />
                    </div>
                </div>
            </div>

            {/* Next Skip Buttons */}
            {nextSkip(page)}
        </div>
    );
}

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

                {/* Next Skip Buttons */}
                {nextSkip(page)}
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
            <>
                {fileUploadOnboard("Let's upload your profile photo", 4)}
            </>
        );
    }

    // Upload a valid ID
    function onboardFour() {
        return (
            <>
                {fileUploadOnboard('Upload a valid ID', 5)}
            </>
        );
    }

    // Finished Onboarding Page
    function finishedOnboarding() {
        return (
            <div>
                <div className = 'h-4/5'>
                    <Image
                        src='/images/SignUp/OnboardingComplete-C.svg'
                        alt=''
                        layout = 'fill'
                        objectFit = 'cover'
                    />
                </div>

                <div className = 'w-full pt-4 flex flex-col pb-20 m-auto mt-72'>
                    <h3 className = 'text-4xl font-semibold text-center bg-white'>Onboarding Complete!</h3>
                    <Link href = '/home'>
                        <button className = 'bg-blue-600 text-white rounded w-28 p-1 ml-auto mr-auto mt-4 z-50'>
                                Finish
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    // Function to facilitate correct page renders
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
                        {currentPage != 5 ?
                            (
                                <>
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

                                {/* Renders page content */}
                                {renderPage()}
                                </>
                            )
                            :
                            (
                                <>
                                    {/* Renders page content */}
                                    {renderPage()}
                                </>
                            )
                        } 
                    </div>
                    <Footer />
                </div>
            </main>
        </div>
    );
}
