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
        redirect: async (url, _) => {
            if (url === '/api/auth/signin') {
                return Promise.resolve('/onboarding');
            }

            return Promise.resolve('/home');
        },
    },
    pages: {
        error: '/signup',
    },
})