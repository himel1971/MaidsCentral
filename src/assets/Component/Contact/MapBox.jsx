import React, { useState } from "react";
import { Map, Marker } from "pigeon-maps"

import LocationList from "./LocationList";

const MapBox = () => {
  const [hue, setHue] = useState(0)
  const color = `hsl(${hue % 360}deg 39% 70%)`


  return (
    <>
      <section className="relative z-10 overflow-hidden px-8  py-20 dark:bg-dark lg:py-[120px]">
        <div className="max-w-screen-xl mx-auto">
          <div className="-mx-4 flex flex-wrap lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <span className=" block text-[#00AEEF] font-semibold ">
                  Contact Us
                </span>
                <h2 className="mb-6 text-[32px] font-bold uppercase text-[#065FB1] sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  GET IN TOUCH WITH US
                </h2>
                <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                  Get in touch with Maids Central today for reliable and trustworthy domestic help services. Whether you need assistance with cleaning, childcare, or eldercare, our skilled maids are here to help. Feel free to reach out via phone, email, or WhatsApp. We look forward to assisting you with your household needs!
                </p>





              </div>
            </div>

            {/* Map Integration  */}




            <LocationList></LocationList>
          </div>


          {/* map box */}


          <div className=" mt-24 space-y-10">


            <h1 className="text-4xl font-semibold uppercase text-[#065FB1] ">Find us On Map</h1>



            {/* 1st location  */}

            <div>
              <h1 className="text-xl font-medium uppercase text-slate-700 mb-2 ">BUKIT TIMAH</h1>


              <Map height={300} defaultCenter={[1.343070, 103.776090]} defaultZoom={16}>
                <Marker
                  width={50}
                  anchor={[1.343070, 103.776090]}
                  color={color}
                  onClick={() => setHue(hue + 20)}
                />
                <Marker
                  width={50}
                  anchor={[1.343070, 103.776090]}
                  color={color}
                  onClick={() => {
                    setHue(hue + 20);
                    window.open("https://www.google.com/maps/dir//170+Upper+Bukit+Timah+Rd,+Singapore+588179/@1.3431425,103.6934771,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x31da11d085b7bbbf:0xa1c1d2dd91fe299d!2m2!1d103.7758791!2d1.3431439?entry=ttu", "_blank");
                  }}
                >




                  {/* <img src="../../../../public/images/icons/icon-phone.svg" alt="" /> */}
                </Marker>
              </Map>
            </div>

            {/* 2nd location  */}

            <div>
              <h1 className="text-xl font-medium uppercase text-slate-700 mb-2 ">THOMSON</h1>


              <Map height={300} defaultCenter={[1.351980, 103.836000]} defaultZoom={16}>
                <Marker
                  width={50}
                  anchor={[1.351980, 103.836000]}
                  color={color}
                  onClick={() => setHue(hue + 20)}
                />
                <Marker
                  width={50}
                  anchor={[1.351980, 103.836000]}
                  color={color}
                  onClick={() => {
                    setHue(hue + 20);
                    window.open("https://www.google.com/maps/dir//200+Upper+Thomson+Road,+Singapore+574424,+Singapore/@1.351845,103.7948307,13z/data=!3m1!5s0x31da1736273e05e5:0x991c266b75ccd8f0!4m8!4m7!1m0!1m5!1m1!1s0x31da173a5329dd59:0x944f4bbcfcc3b83c!2m2!1d103.8360304!2d1.3518453?entry=ttu", "_blank");
                  }}
                >




                  {/* <img src="../../../../public/images/icons/icon-phone.svg" alt="" /> */}
                </Marker>
              </Map>
            </div>
            {/* 3rd location  */}



            <div>
              <h1 className="text-xl font-medium uppercase text-slate-700 mb-2 ">GEYLANG</h1>


              <Map height={300} defaultCenter={[1.316870, 103.899130]} defaultZoom={16}>
                <Marker
                  width={50}
                  anchor={[1.316870, 103.899130]}
                  color={color}
                  onClick={() => setHue(hue + 20)}
                />
                <Marker
                  width={50}
                  anchor={[1.316870, 103.899130]}
                  color={color}
                  onClick={() => {
                    setHue(hue + 20);
                    window.open("https://www.google.com/maps/dir//%2301-19+Dewi+Gift+Shop,+55+Changi+Rd,+Singapore+419709/@1.3167155,103.8710616,13.5z/data=!3m1!5s0x31da1736273e05e5:0x991c266b75ccd8f0!4m8!4m7!1m0!1m5!1m1!1s0x31da18109d77b377:0x105e4875aaf1dc4b!2m2!1d103.8990002!2d1.3168188?entry=ttu", "_blank");
                  }}
                >




                  {/* <img src="../../../../public/images/icons/icon-phone.svg" alt="" /> */}
                </Marker>
              </Map>
            </div>










          </div>

        </div>
      </section>
    </>
  );
};

export default MapBox;
