import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const TopStories = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/blogs')
            .then((response) => response.json())
            .then((data) => setBlogs(data))
            .catch((error) => console.error('Error fetching blogs:', error));
    }, []);


    return (
        <>
            <div className="hero font-rubik min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/KwRsR31/Red-Colorful-UI-Health-and-Wellness-Bio-Link-Website.png)' }}>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-6xl">
                        <h1 className="mb-12 md:text-8xl text-5xl text-white text-center capitalize">
                            Top Stories Of <br /> real people
                        </h1>
                        <div className='container mx-auto grid  md:grid-cols-2 justify-items-center  gap-6'>
                            {blogs.map((blog) => (

                                <Link
                                    key={blog._id}
                                    to={`blog/${blog._id}`}
                                    type="button"
                                    className="px-8 py-3 w-72 text-center font-semibold rounded-full bg-white text-black"
                                >
                                    {blog.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopStories