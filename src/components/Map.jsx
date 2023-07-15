import React from 'react'

const Map = () => {
  return (
    <div className="h-screen mx-auto w-[100%]">

    <section className="m-0 p-0">
      <div className="block bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-purple-700">
        <div className="flex flex-wrap items-center">
          <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
            <div className="flex flex-wrap px-3 pt-12 pb-12 md:pb-0 lg:pt-0">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                <div className="flex items-start">
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold lg:text-7xl dark:text-white">
                      Contact Us
                    </p>
                    <p className="text-neutral-500 lg:text-7xl dark:text-neutral-200">
                      example@gmail.com
                    </p>
                    <p className="text-neutral-500 lg:text-7xl dark:text-neutral-200">
                      +91 9066678669
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
            <div className="h-[500px] w-full">
              <iframe src="https://maps.google.com/maps?q=Maruthi+Nagar+KMC+Park,+Maruthi+Nagar,+Sree+Rama+Nagar,+Kurnool,+Andhra+Pradesh+518002=UTF8&iwloc=&output=embed"
                className="left-0 top-0 h-full w-full" frameborder="0"
                allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Map