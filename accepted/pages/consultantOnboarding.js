import Head from 'next/head'
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import OnboardingOne from '../components/onboardingOne'
import OnboardingTwo from '../components/onboardingTwo'
import OnboardingThree from '../components/onboardingThree'

export const siteTitle = 'Consulting Onboarding | AcceptED'

// Consultant Onboarding - Upload Photo
export default function Onboarding({children, home}) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <OnboardingThree />
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
