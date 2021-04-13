import React from "react";
import Link from "next/link"
import 'dropzone/dist/dropzone.css'
import Footer from '../components/footer'

function OnboardingOne() {
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

export default OnboardingOne;