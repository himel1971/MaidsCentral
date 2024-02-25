import React from "react";
import { Map } from 'pigeon-maps'
import { osm } from 'pigeon-maps/providers'
import Location from "./Location";
import LocationList from "./LocationList";

const MapBox = () => {
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
        </div>
      </section>
    </>
  );
};

export default MapBox;
