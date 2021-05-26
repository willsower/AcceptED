import Head from 'next/head';
import SignUp, { siteTitle } from './signup';


export default function Home() {

  // const [ session, loading ] = useSession()
  return (

    
    
  
    <SignUp home>
      <script src="https://apis.google.com/js/api.js" type="text/javascript"></script>
      <Head>
        <title> {siteTitle} </title>
      </Head>
    </SignUp>
  )
}
