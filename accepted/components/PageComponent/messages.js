import Image from 'next/image'
import Link from 'next/link'

function Messages() {
    return(
        <div className = 'text-center p-2'>
            <div className = ''>
                <Image
                    priority
                    src='/images/messages_page_temp.png'
                    className = ''
                    width = {500}
                    height = {500}
                />
            </div>

            <div className = ''>
                <h1 className = 'text-2xl md:text-4xl font-bold text-gray-600'>Launching Messages in Slack...</h1>
                <p className = ' text-sm mt-4 text-gray-600'>Slack is opening in a new window! <Link href = 'https://slack.com/'><span className = 'text-blue-600 cursor-pointer'>Click here if you are not automatically redirected.</span></Link></p>
            </div>
        </div>
    );
}

export default Messages;