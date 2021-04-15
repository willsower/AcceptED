import React from "react";
import Head from 'next/head';
import Link from "next/link";
import Router from 'next/router';

import StepProgressBar from 'react-step-progress';
import ReactPlayer from 'react-player';
import 'react-step-progress/dist/index.css';
import 'dropzone/dist/dropzone.css';

import Footer from '../components/footer';

export const siteTitle = 'Onboarding | AcceptED';

// Consultant Onboarding - Upload Photo
export default function Onboarding({children, home}) {

    function OnboardingOne() {
        // React Dropzone Configurations
        React.useEffect(async () => {
            const Dropzone = (await import("dropzone")).default;
            Dropzone.autoDiscover = false;

            let currentSingleFile = undefined;

            // Only allow single files
            new Dropzone(document.getElementById("dropzone-single"), {
              url: "/",
              thumbnailWidth: null,
              thumbnailHeight: null,
              previewsContainer: document.getElementsByClassName(
                "dz-preview-single"
              )[0],
              previewTemplate: document.getElementsByClassName("dz-preview-single")[0]
                .innerHTML,
              maxFiles: 1,
              acceptedFiles: "image/*",
              init: function () {
                this.on("addedfile", function (file) {
                  if (currentSingleFile) {
                    this.removeFile(currentSingleFile);
                  }
                  currentSingleFile = file;
                });
              },
            });
            document.getElementsByClassName("dz-preview-single")[0].innerHTML = "";
        }, []);

        // Consultant Onboarding - Upload Photo
        return (
            <div className = 'm-auto w-4/5 flex flex-col'>
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

                <Link href="">
                    <p className = 'text-xs mt-16 underline ml-auto mr-auto'><a className = "text-blue-600">Skip for now</a></p>
                </Link>
            </div>
        );
    }

    function OnboardingTwo() {
        // Consultant Onboarding - Upload Photo
        return (
            <div className = 'm-auto w-4/5 flex flex-col'>
                <h1 className = 'text-3xl text-blue-600 mb-2 text-center'>Welcome, [Name]!</h1>
                <h3 className = "text-xl font-semibold text-center">Watch a short training video</h3>
                <h5 className = 'text-center text-base mt-4'>How to Engage Your Student</h5>

                <div className= 'm-auto'>
                    <ReactPlayer 
                        url="https://www.youtube.com/watch?v=ndsaoMFz9J4" 
                    />
                </div>

                <Link href="">
                    <p className = 'text-xs mt-16 underline ml-auto mr-auto'><a className = "text-blue-600">Skip for now</a></p>
                </Link>
            </div>
        );
    }

    function OnboardingThree() {
        // Consultant Onboarding - Upload Photo
        return (
            <div className = 'm-auto w-4/5 flex flex-col'>
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
                    <Link href="">
                        <p className = 'invisible text-xs mt-16 underline ml-auto mr-auto'><a className = "text-blue-600">Skip for now</a></p>
                    </Link>
                </div>
            </div>
        );
    }

    const step1Content = OnboardingOne();
    const step2Content = OnboardingTwo();
    const step3Content = OnboardingThree();
     
    // setup step validators, will be called before proceeding to the next step
    function step2Validator() {
      // return a boolean
      return true;
    }
     
    function step3Validator() {
      // return a boolean
      return true;
    }
     
    function onFormSubmit() {
      // handle the submit logic here
      // This function will be executed at the last step
      // when the submit button (next button in the previous steps) is pressed

      Router.push('./finishedOnboarding');
    }

    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>{ siteTitle }</title>
            </Head>
            <main>
            <div className = 'min-h-screen relative'>
                <div className = 'm-auto w-4/5 pt-4 flex flex-col pb-20'>

                    <StepProgressBar
                        startingStep={0}
                        onSubmit={onFormSubmit}
                        steps={[
                            {
                            label: 'Upload Photo',
                            name: 'step 1',
                            content: step1Content
                            },
                            {
                            label: 'Training',
                            name: 'step 2',
                            content: step2Content,
                            validator: step2Validator
                            },
                            {
                            label: 'Background Check',
                            name: 'step 3',
                            content: step3Content,
                            validator: step3Validator
                            }
                        ]}
                    />
                
                    { children }
                </div>
                <Footer />
            </div>
            </main>
        </div>
    );
}
