import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const SingleMaidData = () => {
    const { id } = useParams();
    const allMaids = useLoaderData();
    const maid = allMaids.find(maid => maid.id === parseInt(id));
    const { name, date_of_birth, height, weight, experience_years } = maid;
    // console.log(id);
    // console.log(allMaids);
    // console.log(maid);

    return (
        <section className='container mx-auto my-16'>
            <div>
                <h1>{name}</h1>

                <Tabs>
                    <TabList>
                        <Tab>Title 1</Tab>
                        <Tab>Title 2</Tab>
                        <Tab>Title 3</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 3</h2>
                    </TabPanel>
                </Tabs>


            </div>
        </section>
    );
}

export default SingleMaidData;
