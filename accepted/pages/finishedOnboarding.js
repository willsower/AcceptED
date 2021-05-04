import Image from 'next/image';
import Link from "next/link";
import Head from 'next/head';

// Finished Onboarding Page
function finishedOnboarding() {
    return (
        <div>
            <Head>
                <link rel='icon' href='/favicon.ico' />
                <title>Onboarding Complete | AcceptED</title>
            </Head>
            <main>
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
                        <h3 className = 'text-4xl font-semibold text-center mt-8'>Onboarding Complete!</h3>
                        <Link href = '/dashboardShell'>
                            <button className = 'bg-blue-600 text-white rounded w-28 p-1 ml-auto mr-auto mt-4'>
                                    Finish
                            </button>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default finishedOnboarding;