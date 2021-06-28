import Head from "next/head";
import Image from "next/image";
import MyStudents from "../components/Cards/Profile/my_students";
import MyProfile from "../components/Cards/Profile/my_profile";
import MyInformation from "../components/Cards/Profile/my_information";
import StudentColleges from "../components/Cards/Profile/student_colleges";
import { nav } from "./helper";
import { PrismaClient } from "@prisma/client";
import { signOut } from "next-auth/client";
import { getSession } from "next-auth/client";

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const prisma = new PrismaClient()

  if (!session) {
    // If no user, redirect to login
    return {
      props: {},
      redirect: {
        destination: "/login_signup",
        permanent: false,
      },
    };
  }

  // If there is a user, return the current session
  const profile = await prisma.user.findMany({
    where: {
      email: {
        equals: session.user.email,
      },
    },
  });

  return {
    props: { profile },
  };
}

export default function Profile({ profile }) {
  return (
    <div>
      <Head>
        <title>Profile | AcceptED</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="flex flex-row">
          {/* Navbar - Left */}
          <div className="sm:w-40 h-screen flex flex-col relative">
            <div className="fixed border-r border-gray-200 sm:w-40 h-screen">
              {/* AcceptED Logo */}
              <div className="mt-2">
                <div className="p-4 sm:pl-9 sm:pr-9">
                  <Image
                    priority
                    src="/images/accepted_logo.svg"
                    className=""
                    height={100}
                    width={100}
                  />
                </div>
              </div>

              {/* Navigation */}
              <div className="">
                {/* Home */}
                {nav("/home", "/images/Shell/home_ico.svg", "Home")}

                {/* Message */}
                {nav("/messages", "/images/Shell/message_ico.svg", "Messages")}

                {/* Materials */}
                {nav(
                  "/materials",
                  "/images/Shell/materials_ico.svg",
                  "Materials"
                )}

                {/* Tasks */}
                {nav("/tasks", "/images/Shell/tasks_ico.svg", "Tasks")}

                {/* Profile*/}
                {nav(
                  "/profile",
                  "/images/Shell/profile_blue_ico.svg",
                  "Profile"
                )}

                {/* Logout*/}
                <div
                  className="w-full sm:h-12 p-2 sm:p-4 m-auto hover:bg-blue-50 active:bg-blue-50 hover:cursor-pointer"
                  onClick={() =>
                    signOut({
                      callbackUrl: "http://localhost:3000/login_signup",
                    })
                  }
                >
                  <div className="inline-block align-middle mr-1 sm:mr-3">
                    <Image
                      priority
                      src="/images/Shell/logout_ico.svg"
                      className=""
                      height={20}
                      width={20}
                    />
                  </div>
                  <div className="text-xs sm:text-base inline-block text-gray-400">
                    Logout
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side of Screen */}
          <div className="flex-grow h-auto flex flex-col relative">
            {/* Header Top */}
            <div className="h-16 flex flex-col relative">
              <div className="border-b border-gray-200 h-16 w-full z-10 fixed bg-white">
                <div className="mt-auto mb-auto p-3 ml-2">
                  <div className="text-2xl font-semibold inline-block">
                    Profile
                  </div>
                </div>
              </div>
            </div>

            {/* Content Bottom */}
            <div className="flex-grow h-auto flex flex-col relative bg-gray-50 pb-12 z-0">
              <div className="mt-12 md:flex md:flex-row ml-14">
                <div className="md:w-72 lg:w-96 mb-4">
                  {/* <MyProfile counselorID={counselorUserID} /> */}
                  <MyProfile profile={profile} />
                  <MyInformation profile={profile} />
                  <MyStudents />

                  <h3 className="mb-3 mt-3 font-bold">Directory</h3>
                  <div className="border-1 border-gray-200 rounded pl-3 pt-3 pb-3 w-4/5 md:w-72 lg:w-96 bg-white shadow-md">
                    <p className="inline-block text-xs align-middle mr-8">
                      Go to Directory
                    </p>
                    <div className="inline-block align-middle">
                      <Image
                        priority
                        src="/images/Icon/arrow_ico.svg"
                        className=""
                        height={20}
                        width={20}
                      />
                    </div>
                  </div>
                </div>

                <div className="md:flex-col md:w-full md:ml-14">
                  <StudentColleges />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
