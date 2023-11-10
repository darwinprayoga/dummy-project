import {
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
  import { useEffect, useState } from "react";
  import { auth } from "../../../firebase";
  import Link from "next/link";
  
  const Navbar = () => {
    const [user, setUser] = useState<any | null>(false);
  
    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user == null) {
          setUser(null);
        } else {
          setUser(user);
        }
      });
    }, [setUser]);
  
    function googleSignIn() {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider);
    }
  
    function logOut() {
      signOut(auth);
    }
    return (
      <nav className="bg-white sticky top-0 z-50 flex flex-nowrap items-center justify-between border-b py-4 px-4 xl:px-24 lg:px-18 md:px-12 md:flex-nowrap sm:px-8 sm:flex-nowrap">
        <div>
          <Link href="/">
            <img src="/embrace.svg"></img>
          </Link>
        </div>
        <div className="text-black hidden md:flex flex-wrap space-x-4 items-center justify-between font-medium text-sm xl:text-lg md:flex-nowrap md:text-xs sm:text-xs">
          <Link href="/#how-it-works">How it works</Link>
          <Link href="/#our-work">Our Work</Link>
          <Link href="/listing">Listing</Link>
          <a>About Us</a>
        </div>
        <div className="md:hidden">
          <div>
            <button>
              <img src="/icon/dropdown-button.png" alt="" />
            </button>
          </div>
          <div className="bg-white w-32 space-y-4 p-4 right-0 absolute block items-end z-10 shadow-xl font-bold rounded-xl">
            <button className="text-black rounded-xl w-full p-2 xl:py-2 xl:px-3 xl:text-lg lg:text-xs lg:p-2 md:p-1 md:text-xs md:rounded-1 md:mx-0 sm:text-xs">
              Book A Call
            </button>
            <button
              className="bg-[#3461FF] rounded-xl w-full p-2 xl:py-2 xl:px-3 xl:text-lg lg:text-xs lg:p-2 md:p-1 md:text-xs md:rounded-1 md:mx-0 sm:text-xs"
              onClick={googleSignIn}
            >
              Login
            </button>
          </div>
        </div>
        <div className="space-x-4 justify-between hidden md:flex flex-wrap items-center font-medium text-sm xl:text-lg md:flex-nowrap md:text-xs sm:text-xs">
          <button className="text-black rounded-xl p-2 xl:py-2 xl:px-3 xl:text-lg lg:text-xs lg:p-2 md:p-1 md:text-xs md:rounded-1 md:mx-0 sm:text-xs">
            Book A Call
          </button>
          <Link href="/api/capture?url=http://localhost:3000">
            <button className="text-white bg-[#3461FF] rounded-xl p-2 xl:py-2 xl:px-3 xl:text-lg lg:text-xs lg:p-2 md:p-1 md:text-xs md:rounded-1 md:mx-0 sm:text-xs">
              Capture Screenshot
            </button>
          </Link>
          {!user ? (
            <button
              className="bg-[#3461FF] rounded-xl p-2 xl:py-2 xl:px-3 xl:text-lg lg:text-xs lg:p-2 md:p-1 md:text-xs md:rounded-1 md:mx-0 sm:text-xs"
              onClick={googleSignIn}
            >
              Login
            </button>
          ) : (
            <button
              className="bg-[#3461FF] rounded-xl p-2 xl:py-2 xl:px-3 xl:text-lg lg:text-xs lg:p-2 md:p-1 md:text-xs md:rounded-1 md:mx-0 sm:text-xs"
              onClick={logOut}
            >
              Logout
            </button>
          )}
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  