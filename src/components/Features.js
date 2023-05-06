import React from 'react'
import featureConnect from "../assets/connect.jpg"
import sponsor from "../assets/22.jpg"
import userimg from "../assets/Eventmanager.jpg"

const Features = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-14 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-72 md:h-48 w-full object-cover object-center" src={userimg} alt="blog"/>
          <div className="p-6">
            <h1 className="title-font text-lg flex justify-center font-medium text-gray-900 mb-3">Get Potential Sponsors</h1>
            <p className="leading-relaxed flex justify-center text-center mb-3">Tired of surfing on internet for potential sponsors ?</p>
            <p className="leading-relaxed flex justify-center text-center mb-3">Here is the solution for your problem.</p>
            <p className="leading-relaxed flex justify-center text-center mb-3">Use this interface to reach out sponsors</p>
            
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-72 md:h-48 w-full object-cover object-center" src={sponsor} alt="blog"/>
          <div className="p-6">
            <h1 className="title-font text-lg flex justify-center font-medium text-gray-900 mb-3">Become a sponsor</h1>
            <p className="leading-relaxed flex text-center mb-3">Have a startup or looking for clients to sponsor your product ?</p>
            <p className="leading-relaxed flex justify-center mb-3">Post product details on this site</p>
            
          </div>
        </div>
      </div>
      <div className="p-4 md:w-1/3">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <img className="lg:h-72 md:h-48 w-full h-full object-cover object-center" src={featureConnect} alt="blog"/>
          <div className="p-6">
            <h1 className="title-font text-lg flex justify-center font-medium text-gray-900 mb-3">Connect</h1>
            <p className="leading-relaxed flex text-center justify-center mb-3">Found your potential sponsor ?</p>
            <p className="leading-relaxed flex text-center justify-center mb-3">Connect with them using chat bot or email</p>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Features