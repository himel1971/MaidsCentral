import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FirstTab from '../Component/FindMaid/Tab/FirstTab';
import SecondTab from '../Component/FindMaid/Tab/SecondTab';
import ThirdTab from '../Component/FindMaid/Tab/Thirdtab';
import BookForm from '../Component/FindMaid/BookForm';



const SingleMaidData = () => {
    const { id } = useParams();
    const allMaids = useLoaderData();
    const maid = allMaids.find(maid => maid._id == id);
    const { name, date_of_birth, height, weight, experience_years, picture_url } = maid;
    // console.log(id);
    // console.log(allMaids);
    // console.log(maid);

    return (
        <section className='container lg:flex justify-between mx-auto my-16'>
            <div className='lg:w-[65%] border p-10 rounded-lg'>


                <section className='space-x-8 lg:flex py-7 justify-center items-center '>

                    <div className="avatar ">
                        <div className="w-40  mask mask-squircle">
                            <img src={picture_url} alt="" />
                        </div>
                    </div>
                    <div className='lg:flex'>
                        <div className='mt-2'>
                            <h1 className='font-bold text-4xl cSecondary uppercase'>{name}</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, quas.</p>
                        </div>

                        
                    </div>
                </section>


                <section>

                    <Tabs>
                        <TabList  >
                            <Tab ><h1 className='uppercase font-semibold'>Personal Information</h1></Tab>
                            <Tab>Professional Experience</Tab>
                            <Tab>Dietary Restrictions</Tab>
                        </TabList>
                        {/* 1st tab  */}
                        <TabPanel>
                            <FirstTab data={maid}></FirstTab>
                        </TabPanel>
                        {/* 2nd tab  */}
                        <TabPanel>
                            <SecondTab data={maid}></SecondTab>
                        </TabPanel>
                        {/* 3rd tab  */}
                        <TabPanel>
                            <ThirdTab data={maid}></ThirdTab>
                        </TabPanel>
                    </Tabs>
                </section>





            </div>
{/* form text  */}

            <div className=' border p-8 right-[25px] items-end lg:w-[30%]  rounded-lg '>
               <BookForm data={maid}></BookForm>
            </div>

        </section>
    );
}

export default SingleMaidData;
