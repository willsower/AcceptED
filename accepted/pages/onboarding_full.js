import React from "react";
import Head from 'next/head';
import Link from "next/link";
import Router from 'next/router';

import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import 'dropzone/dist/dropzone.css';

import Footer from '../components/footer';

export const siteTitle = 'Onboarding | AcceptED';

// This is how many tasks the user will need to do for onboarding. How many pages?
const maxPage = 5;

// Consultant Onboarding - Upload Photo
export default function Onboarding({children, home}) {
    var currentPage = 2;
    var percentage = 100 - ((100 / maxPage) * (maxPage - currentPage));

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
                            <div className = 'justify-items-center align-center flex'>
                                <h5 className = 'inline-block float-left'>Training</h5>
                                <h5 className = 'inline-block float-none'>Upload Files</h5>
                                <h5 className = 'inline-block float-right'>Background Check</h5>
                            </div>
                        </div>
                    
                        { children }
                    </div>
                    <Footer />
                </div>
            </main>
        </div>
    );
}
