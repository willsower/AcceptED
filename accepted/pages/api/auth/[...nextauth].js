import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Adding authentication providers here
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    // Can add other providers here
  ],

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
})