import Head from 'next/head'
import Image from 'next/image'
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import OnboardingOne from '../components/onboardingOne'
import OnboardingTwo from '../components/onboardingTwo'
import OnboardingThree from '../components/onboardingThree'

export const siteTitle = 'Consulting Onboarding | AcceptED'

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
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                {finishedOnboarding()}
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
