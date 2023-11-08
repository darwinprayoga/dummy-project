import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`bg-white ${inter.className}`}>
      <header>
        <div className="w-screen flex justify-between py-8 px-12 xl:px-24 lg:px-18 md:px-12 md:py-12 sm:px-8 sm:py-8">
          <div className="w-1/2 flex flex-col justify-center space-y-4 xl:space-y-8 xl:py-24 lg:space-y-8 lg:py-24 md:space-y-4 sm:space-y-4">
            <div className="text-black font-bold text-5xl xl:w-2/3 xl:text-7xl lg:w-2/3 lg:text-6xl md:w-4/5 md:text-5xl sm:w-4/5 sm:text-4xl">
              We Take Care of Your Brand
            </div>
            <p className="text-black text-xs lg:text-lg md:text-sm sm:text-sm sm:w-3/4">
              We care about our work and we care about our clients.
            </p>
            <div className="flex flex-wrap space-x-2">
              <input
                type="text"
                className="bg-[#FAFAFA] text-black form-input w-3/5 h-8 text-xs border pl-2 rounded-xl lg:rounded-3xl lg:w-3/5 lg:h-12 md:h-8 md:text-sm md:w-3/5 sm:h-6 sm:text-sm"
                placeholder="Enter your email"
              />
              <button className="text-white bg-[#3461FF] font-medium rounded-full text-xs px-2 lg:h-12 lg:px-6 md:h-8 md:text-sm md:px-4 sm:h-6">
                Lets talk
              </button>
            </div>
          </div>
          <div className="w-1/2">
            <img src="/image-header.png" alt="image-header" />
          </div>
        </div>
      </header>
      <section className="bg-[#FAFAFA] flex flex-col items-center px-8 space-y-4 lg:px-24 md:px-12">
        <h1 className="text-black font-medium pt-12 text-2xl">
          Companies We Work With
        </h1>
        <div className="space-y-8 py-12">
          <img src="/frame/frame 56.png"></img>
          <img src="/frame/frame 57.png"></img>
        </div>
      </section>
      <section className="flex justify-center w-screen py-8 px-8 lg:py-24 lg:px-24 md:py-12 md:px-12">
        <div className="w-1/2 grid gap-4 grid-cols-2 grid-rows-2">
          <div className="text-black">
            <h1 className="font-bold text-3xl lg:text-5xl md:text-4xl">245%</h1>
            <p className="text-slate-400 text-xs lg:text-md md:text-sm">
              Most revenues for the brand
            </p>
          </div>
          <div className="text-black">
            <h1 className="font-bold text-3xl lg:text-5xl md:text-4xl">50+</h1>
            <p className="text-slate-400 text-xs lg:text-md md:text-sm">
              Brand trust us
            </p>
          </div>
          <div className="text-black">
            <h1 className="font-bold text-3xl lg:text-5xl md:text-4xl">
              130K+
            </h1>
            <p className="text-slate-400 text-xs lg:text-md md:text-sm">
              Audience reached
            </p>
          </div>
          <div className="text-black">
            <h1 className="font-bold text-3xl lg:text-5xl md:text-4xl">24+</h1>
            <p className="text-slate-400 text-xs lg:text-md md:text-sm">
              Worldwide award
            </p>
          </div>
        </div>
        <div className="w-1/2 space-y-4">
          <h1 className="text-black font-medium text-3xl lg:text-5xl md:text-4xl">
            Commitments
          </h1>
          <p className="text-slate-600 text-xs md:text-sm">
            We are committed to working with you collaboratively to understand
            your goals and create a strategy that will achieve them.
          </p>
          <p className="text-blue-500 font-bold text-sm md:text-lg">
            Learn more
          </p>
        </div>
      </section>
      <section
        id="how-it-works"
        className=" w-screen flex justify-between px-8 py-8 lg:px-24 space-x-8 lg:space-x-12 lg:py-12 md:px-12 md:h-1/2"
      >
        <div className="w-1/2 space-y-12 md:h-1/2">
          <div className="space-y-2 md:space-y-4">
            <h1 className="text-black font-medium text-3xl lg:text-6xl md:text-4xl">
              How It Works
            </h1>
            <p className="text-black w-full text-sm lg:text-lg md:text-sm">
              We believe that the best way to create successful marketing
              campaigns is to work closely with our clients to understand their
              goals and challenges.
            </p>
          </div>
          <div>
            <img src="image-section3.png" alt="a Keyboard" className="w-full" />
          </div>
        </div>
        <div className="w-1/2 space-y-9 xl:space-y-12 lg:space-y-9 md:space-y-11 md:h-1/2">
          <div className="flex space-x-4 h-16 md:h-16 lg:h-full">
            <img src="/icon/majesticons_dollar-circle.png" alt="icon1" />
            <div>
              <h1 className="text-black font-bold text-sm lg:text-2xl">
                Discovery
              </h1>
              <p className="text-black text-xs xl:text-lg lg:text-md md:text-sm">
                We meet with you to learn about your business, your goals, and
                your target audience.
              </p>
            </div>
          </div>
          <div className="flex space-x-4 h-16 md:h-16 lg:h-full">
            <img src="/icon/majesticons_dollar-circle (1).png" alt="icon2" />
            <div>
              <h1 className="text-black font-bold text-sm lg:text-2xl">
                Strategy
              </h1>
              <p className="text-black text-xs xl:text-lg lg:text-md md:text-sm">
                We develop a customized marketing strategy that is based on your
                unique needs and goals.
              </p>
            </div>
          </div>
          <div className="flex space-x-4 h-16 md:h-16 lg:h-full">
            <img src="/icon/majesticons_dollar-circle (2).png" alt="icon3" />
            <div>
              <h1 className="text-black font-bold text-sm lg:text-2xl">
                Execution
              </h1>
              <p className="text-black text-xs xl:text-lg lg:text-md md:text-sm">
                We execute our strategy using the latest digital marketing tools
                and techniques.
              </p>
            </div>
          </div>
          <div className="flex space-x-4 h-16 md:h-16 lg:h-full">
            <img src="/icon/majesticons_dollar-circle (3).png" alt="icon4" />
            <div>
              <h1 className="text-black font-bold text-sm lg:text-2xl">
                Measurement
              </h1>
              <p className="text-black text-xs xl:text-lg lg:text-md md:text-sm">
                We track the results of our campaigns so that we can make
                adjustments as needed.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="our-work" className="space-y-4 py-12 px-24 md:h-1/2">
        <div className="flex flex-col items-center space-y-4 lg:space-y-2">
          <h1 className="text-black font-medium text-5xl">Our Work</h1>
          <p className="text-black">A glimpse of our portofolio</p>
        </div>
        <div className="grid-rows-3 gap-2 flex items-center justify-between">
          <div className="space-y-2">
            <img src="/our-work/Rectangle 161.png" alt="apple" />
            <h1 className="text-black font-bold flex justify-center">Apple</h1>
          </div>
          <div className="space-y-2">
            <img src="/our-work/Rectangle 161 (1).png" alt="apple" />
            <h1 className="text-black font-bold flex justify-center">
              Coca Cola
            </h1>
          </div>
          <div className="space-y-2">
            <img src="/our-work/Rectangle 161 (2).png" alt="apple" />
            <h1 className="text-black font-bold flex justify-center">Nike</h1>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <button className="bg-[#3461FF] rounded-xl p-2">See more</button>
        </div>
        <div className="flex justify-center h-1/2 py-4 px-24">
          <div className="bg-[#3561FF] bg-[url('/elevate-your-brand/Background.png')] w-full rounded-2xl px-12 py-24 flex flex-col md:flex-row space-y-8 md:space-y-0">
            <div className="w-1/2 py-4">
            <h1 className="text-5xl font-medium w-3/4">Elevate Your Brand Today!</h1>
            </div>
            <div className="w-1/2 flex flex-col space-y-10">
              <p>Ready to transform your digital dresence? Let's create magic together! book our services now!</p>
              <button className="bg-white text-black rounded-xl p-2 w-1/3">Book Now</button>
            </div>
          </div>
        </div>
      </section>
      <section className="h-screen flex flex-col px-24 py-12 font-sans space-y-12">
      <div className="flex justify-center">
        <div className="w-3/5 flex flex-col space-y-4">
          <div className="flex h-full space-x-4">
            <img src="/meet-our-team/Rectangle 184.png" alt=""/>
            <img src="/meet-our-team/Rectangle 185.png" alt=""/>
            <img src="/meet-our-team/Rectangle 181.png  " alt=""/>
          </div>
          <div className="flex h-full space-x-4">
            <img src="/meet-our-team/Rectangle 182.png" alt=""/>
            <img src="/meet-our-team/Rectangle 183.png" alt=""/>
            <img src="/meet-our-team/Rectangle 186.png" alt=""/>
          </div>
        </div>
        <div className="w-2/5 space-y-24">
          <div className="space-y-4"><h1 className="text-black text-5xl font-semibold">Meet Our Team</h1>
          <p className="text-slate-400">Discover the brilliance behind  Embrace. Our team blends innovation and artistry to craft digital wonders that captivate</p>
          </div>
          <div className="items-end">
          <button className="bg-[#3461FF] rounded-full py-2 px-4">Learn more</button>
          </div>
        </div>
      </div>
      <div className="h-1/2 flex flex-col space-y-4">
        <div>
          <div><h1 className="text-black text-5xl font-semibold">What Our Client Said About Us</h1></div>
          <div className="space-x-2"><button></button><button></button></div>
        </div>
        <div className="flex space-x-4 w-full">
          <div className="bg-[#FAFAFA] hover:bg-[#3461FF] text-black hover:text-white transition duration-300 ease-in-out p-8 flex flex-col rounded-2xl w-3/5 space-y-2">
            <div className="flex space-x-4">
              <div>
                <img src="/what-our-client-said/Ellipse 80.png" alt="" className="w-16"/>
              </div>
              <div>
                <h1 className="font-bold text-xl">Amelia Joseph</h1>
                <h2 className="font-medium">Chief Manager</h2>
              </div>
            </div>
            <div><p>My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.</p></div>
          </div>
          <div className="bg-[#FAFAFA] hover:bg-[#3461FF] text-black hover:text-white transition duration-300 ease-in-out p-8 flex flex-col rounded-2xl w-3/5 space-y-2">
            <div className="flex space-x-4">
              <div>
                <img src="/what-our-client-said/Ellipse 80 (1).png" alt="" className="w-16"/>
              </div>
              <div>
                <h1 className="font-bold text-xl">Jacob Joshua</h1>
                <h2 className="font-medium">Chief Manager</h2>
              </div>
            </div>
            <div><p>I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it's got to be Embrace!</p></div>
          </div>
          <div className="bg-[#FAFAFA] hover:bg-[#3461FF] text-black hover:text-white transition duration-300 ease-in-out p-8 flex flex-col rounded-2xl w-3/5 space-y-2">
            <div className="flex space-x-4">
              <div>
                <img src="/what-our-client-said/Ellipse 80 (2).png" alt="" className="w-16"/>
              </div>
              <div>
                <h1 className="font-bold text-xl">Jacob Joshua</h1>
                <h2 className="font-medium">Chief Manager</h2>
              </div>
            </div>
            <div><p>Embrace really nails it! Creative brilliance, approachable style. They're the partners you want—artistry meets strategy. Thrilled with what they achieved!"</p></div>
          </div>
        </div>
      </div>
      </section>
      <section className="h-screen space-y-12 my-24">
      <div className="w-screen h-1/2 flex justify-center">
          <div className="bg-[#232038] bg-[url('/start-your-journey/background.png')] w-3/4 rounded-2xl p-8 flex flex-col md:flex-row space-y-8 md:space-y-0">
            <div className="w-3/5 p-8 space-y-12">
            <h1 className="text-5xl">Start Your Journey With Us Now</h1>
            <button className="bg-[#3461FF] rounded-full py-4 px-8 text-xl">Start Now</button>
            </div>
            <div className="w-2/5 flex justify-center">
            <div className="bg-[#E0FF22] h-full w-2/3 flex justify-center items-center rounded-full">
              <img src="/start-your-journey/Vector-1.png" alt="" className="w-1/4"/>
              <img src="/start-your-journey/Vector.png" alt="" className="w-1/2"/>
            </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-8 md:space-y-0 md:space-x-0 md:flex-row px-8 md:py-12 md:px-24 h-1/2">
          <div className="md:w-3/5 md:pr-24">
            <div className="border-t text-black py-8"><h1>How do i sign up for the project</h1></div>
            <div className="border-b border-t text-black py-8"><h1>What thing that i should prepare before starting</h1></div>
            <div className="border-b text-black py-8"><h1>Does my company need help for marketing advices</h1></div>
          </div>
          <div className="md:w-2/5 space-y-6 py-4">
            <h1 className="text-black text-4xl font-bold">How We Can Help You?</h1>
            <p className="text-slate-400">Follow our newsletter. We will regularly update our latest project and availability</p>
            <div className="space-x-2">
              <input type="text" className="bg-[#FAFAFA] text-black form-input rounded-xl pl-4 h-8" placeholder="Enter your email"/>
              <button className="text-white bg-[#3461FF] font-medium rounded-full h-8 px-2">Lets talk</button>
            </div>
            <div><a href="" className="text-[#3461FF] font-semibold underline decoration-[#3461FF]">More FAQ</a></div>
          </div>
        </div>
      </section>
      <section className="bg-[#FAFAFA] flex justify-between w-screen xl:px-24 py-12 px-24 md:px-12 md:py-8">
        <div className="w-1/2 space-y-12 md:space-y-8">
          <img src="/embrace.svg" alt="logo embrace" />
          <div className="flex justify-between w-36">
            <a href="instagram.com">
              <img src="/contact-us/instagram.png" alt="logo instagram" />
            </a>
            <a href="twitter.com">
              <img
                src="/contact-us/twitter.png"
                alt="logo twitter"
                className="pt-1"
              />
            </a>
            <a href="facebook.com">
              <img src="/contact-us/facebook.png" alt="logo facebook" />
            </a>
          </div>
          <button className="bg-[#3461FF] rounded-3xl p-3 text-sm w-36">
            Contact Us
          </button>
        </div>
        <div className="text-black w-1/2 flex grid-rows-3 grid-cols-3 gap-1 font-semibold space-x-12">
          <div className="space-y-4">
            <ul>Work With Us</ul>
            <ul>Advertise With Us</ul>
            <ul>Support Us</ul>
            <ul>Business Advices</ul>
          </div>
          <div className="space-y-4">
            <ul>Private Coaching</ul>
            <ul>Our Work</ul>
            <ul>Our Commitment</ul>
            <ul>Our Team</ul>
          </div>
          <div className="space-y-4">
            <ul>About Us</ul>
            <ul>FAQs</ul>
            <ul>Report a Bug</ul>
          </div>
        </div>
      </section>
      <footer className="bg-black h-4 flex justify-between p-8">
        <p>2022 Embrace, inc - All Right Reserved</p>
        <div className="flex space-x-40">
          <p>Terms of use</p>
          <p>Privacy Policy</p>
        </div>
      </footer>
    </main>
  );
}
