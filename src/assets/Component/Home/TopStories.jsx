import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HomeBlogBox from './Blog/HomeBlogBox';
import AnimatedCard from '../Loader/AnimatedCard';

const TopStories = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch('https://maid-central-server-npw1g5hho-kazi-md-khorshed-alams-projects.vercel.app/blogs')
            .then((response) => response.json())
            .then((data) => {
                // Filter the articles by their type being 'blog'
                const blogs = data.filter((article) => article.type === 'blog');
                setArticles(blogs);
                setIsLoading(false);

            })
            .catch((error) => console.error('Error fetching blogs:', error));
    }, []);

    return (
        <div
            className="hero font-rubik min-h-screen"
            style={{
                background: 'linear-gradient(90deg, rgba(17,21,49,1) 0%, rgba(49,137,190,1) 100%)',
            }}
        >
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-xl lg:text-left">
                    <div className="space-y-6 my-8">
                        <h1 className="text-4xl font-rubik font-medium text-white uppercase sm:text-6xl">
                            top stories of&nbsp;
                            <span className="text-[#C1FF72]">employers</span>
                            &nbsp;& their&nbsp;
                            <span className="text-[#C1FF72]">helpers</span>
                        </h1>
                    </div>
                    <div className="space-y-6 my-8">
                        <h1 className="text-lg font-rubik font-medium text-white uppercase sm:text-6xl">
                            are you facing these issues now ?
                        </h1>
                    </div>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <a
                            href="https://wa.me/message/OTPYQ2VQURDEC1"
                            className="px-8 py-3 text-lg font-medium rounded bg-white capitalize text-black"
                        >
                            chat with a live agent
                        </a>
                    </div>
                </div>
                <div className=" space-y-6 items-center justify-center p-6 mt-8 lg:mt-0 ">
                    {isLoading ? (
                        <div className='flex  justify-center items-center'>

                            <span className="loading loading-ring loading-lg"></span>
                        </div>
                    ) : (
                        articles.map((article, index) => (
                            <HomeBlogBox key={index} index={index} {...article} />
                        ))
                    )}
                </div>

            </div>
        </div>
    );
};

export default TopStories;
