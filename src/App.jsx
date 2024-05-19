import { useEffect, useRef, useState } from "react"
import { InView } from "react-intersection-observer"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Tagline from "./components/Tagline"

function App() {
  const [inView, setInView] = useState(false)
  const [inViewTwo, setInViewTwo] = useState(false)
  const [inViewThree, setInViewThree] = useState(false)
  const [inViewFour, setInViewFour] = useState(false)
  return (
    <>
      <Navbar />
      <Tagline />
      <div className="imageDiv" data-isextend={inViewFour}>Video</div>
      <InView onChange={setInViewFour}>
        {({ ref, inView }) => (
          <span className="" ref={ref}>i</span>
        )}
      </InView>
      <div className="text-center w-full px-[10%] py-20">
        <h3 className="px-[20%] flex flex-col text-2xl tag2">The Diamond Cross Ranch
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
        </h3>
      </div>

      <div data-isvisible={inView} className="h-screen flex justify-between items-center section-one">
        <div className="content w-[49%]">
          <h2>Natural Beauty Modern Elegance</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus blanditiis deserunt aut consectetur voluptatum, numquam facere quos reprehenderit error nisi odit, doloremque natus doloribus labore excepturi quasi sunt animi. Exercitationem.</p>
          <button>Read More</button>
        </div>
        <InView onChange={setInView}>
          {({ ref, inView }) => (
            <span className="middle h-full mt-[25%]" ref={ref}></span>
          )}
        </InView>
        <div className="videoDiv h-full w-1/2 bg-gray-200 flex justify-center items-center">
          video or image
        </div>
      </div>
      <div className="h-20"></div>
      <div className="h-screen">
        <div data-isvisible={inViewTwo} className="h-screen flex justify-between items-center section-two bg-[#cabdab]">
          <div className="videoDiv h-full w-1/2 bg-gray-200 flex justify-center items-center">
            video or image
          </div>
          <InView onChange={setInViewTwo}>
            {({ ref, inView }) => (
              <span className="middle h-full mt-[25%]" ref={ref}></span>
            )}
          </InView>
          <div className="content w-[49%]">
            <p className="text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus blanditiis deserunt aut consectetur voluptatum, numquam facere quos reprehenderit error nisi odit, doloremque natus doloribus labore excepturi quasi sunt animi. Exercitationem.</p>
            <div className="flex w-[60%] px-4 h-80 mx-auto justify-center items-center bg-gray-300 image transition-all duration-1000"> Image</div>
          </div>
        </div>
      </div>
      <div className="h-20"></div>
      <div data-isvisible={inViewThree} className="section-three flex justify-between items-center h-96">
        <div className="content">
          <h4 className="text-5xl font-semibold">Signature Horse Released</h4>
          <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas asperiores nisi odio neque eaque architecto numquam reiciendis </p>
        </div>
        <InView onChange={setInViewThree}>
          {({ ref, inView }) => (
            <span className="middle h-full mt-[25%]" ref={ref}></span>
          )}
        </InView>
        <div className="image w-[70%] mx-[5%] h-full">
          <span className="h-full w-full bg-gray-200  flex justify-center items-center">Image</span>
        </div>
      </div>
      <div className="section-four flex justify-center items-center flex-col py-32 ">
        <h4 className="text-3xl font-['Oswald'] tracking-widest text-slate-900">Make Your Dream Webbing Video Come True</h4>
        <p className="py-6 px-[40%] text-center text-xl text-slate-900">Contact us for more details to make it come true</p>
        <button className="border-2 px-10 border-current py-3 m-4 hover:border-yellow-400 hover:text-yellow-400 transition-colors text-slate-900">Contact Us</button>
      </div>
      <div className="section-five border-t py-4 border-black">
        <Footer />
      </div>
    </>
  )
}

export default App
