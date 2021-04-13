import React from "react";
import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link"

import { ProgressBar, Step } from "react-step-progress-bar";
import ReactPlayer from 'react-player';
import "react-step-progress-bar/styles.css";
import 'dropzone/dist/dropzone.css'

import Footer from '../components/footer'

export const siteTitle = 'Consulting Onboarding | AcceptED'

const onboardOneClick = (e) =>  {
    console.log('Free pizza!');
    console.log(e);
}

function OnboardingOne() {

    // React Dropzone Configurations
    React.useEffect(async () => {
        const Dropzone = (await import("dropzone")).default;
        Dropzone.autoDiscover = false;

        let currentSingleFile = undefined;

        // Only allow single files
        // new Dropzone(document.getElementById("dropzone-single"), {
        //   url: "/",
        //   thumbnailWidth: null,
        //   thumbnailHeight: null,
        //   previewsContainer: document.getElementsByClassName(
        //     "dz-preview-single"
        //   )[0],
        //   previewTemplate: document.getElementsByClassName("dz-preview-single")[0]
        //     .innerHTML,
        //   maxFiles: 1,
        //   acceptedFiles: "image/*",
        //   init: function () {
        //     this.on("addedfile", function (file) {
        //       if (currentSingleFile) {
        //         this.removeFile(currentSingleFile);
        //       }
        //       currentSingleFile = file;
        //     });
        //   },
        // });
        // document.getElementsByClassName("dz-preview-single")[0].innerHTML = "";
    }, []);

    // Consultant Onboarding - Upload Photo
    return (
        <div className = 'min-h-screen relative'>
            <div className = 'm-auto w-4/5 pt-4  flex flex-col pb-20'>
                <h1 className = 'text-3xl text-blue-600 mb-2 text-center'>Welcome, [Name]!</h1>
                <h3 className = "text-xl font-semibold text-center">Let's upload your photo</h3>
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

                <button onClick = {onboardOneClick} className = 'bg-blue-600 text-white rounded w-28 p-1 ml-auto mr-auto mt-8'>
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

// Finished Onboarding Page
function finishedOnboarding() {
    return (
        <div className = 'relative h-screen flex flex-row'>
            <div className = 'w-4/5 pt-4 flex flex-col pb-20 m-auto'>
                <div className = 'w-60 h-60 relative m-auto'>
                    <Image
                        src="/images/temp_onboarding.png"
                        alt="Picture of blue checkmark"
                        layout="fill"
                    />
                </div>
                <h1 className = 'text-4xl font-semibold text-center mt-8'>Onboarding Complete!</h1>
                <button className = 'bg-blue-600 text-white rounded w-28 p-1 ml-auto mr-auto mt-4'>
                        Finish
                </button>
            </div>
        </div>
    )
}

// Consultant Onboarding - Upload Photo
export default function Onboarding({children, home}) {
    // if (True) {
    //     return (
    //         <>
    //             {onboardingTwo()}
    //         </>
    //     )
    // } 

    // if (True) {
    //     return (
    //         <>
    //             {onboardingThree()}
    //         </>
    //     )
    // }

    // if (True) {
    //     return (
    //         <>
    //             {finishedOnboarding()}
    //         </>
    //     )
    // }

    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>{ siteTitle }</title>
            </Head>
            <main>
                {OnboardingOne()}
                {/* <ProgressBar
                    percent={75}
                    filledBackground="#2563EB"
                    className = "w-4/5 m-auto"
                >
                    <Step transition="scale">
                    {({ accomplished }) => (
                        <div className="rounded-full h-24 w-24 flex items-center justify-center...">Circle</div>
                    )}
                    </Step>
                    <Step transition="scale">
                    {({ accomplished }) => (
                        <img
                        style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                        width="30"
                        src="https://vignette.wikia.nocookie.net/pkmnshuffle/images/9/97/Pikachu_%28Smiling%29.png/revision/latest?cb=20170410234508"
                        />
                    )}
                    </Step>
                    <Step transition="scale">
                    {({ accomplished }) => (
                        <img
                        style={{ filter: `grayscale(${accomplished ? 0 : 80}%)` }}
                        width="30"
                        src="https://orig00.deviantart.net/493a/f/2017/095/5/4/raichu_icon_by_pokemonshuffle_icons-db4ryym.png"
                        />
                    )}
                    </Step>
                </ProgressBar> */}
            
                { children }
            </main>
        </div>
    )
}
