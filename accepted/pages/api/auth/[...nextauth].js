import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    providers: [
        Providers.Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ],
    callbacks: {
        redirect: async (url, baseUrl) => {
            console.log("\nHERER " + url)
          return Promise.resolve(url)
        }
    },
    pages: {
        error: '/signup',
    },
    // callbacks: {
    //     redirect: async (url, _) => {
    //         console.log("\n\nHERERE " + url)
    //         if (url === '/api/auth/signin') {
    //             return Promise.resolve('/onboarding');
    //         }
    //         console.log("TEST");
    //         // return Promise.resolve('/home');
    //         return '/home';
    //     },
    // },
})