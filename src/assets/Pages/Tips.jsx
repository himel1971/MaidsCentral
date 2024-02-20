import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Tips = () => {


    const [blogs, setBlogs] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/tips')
            .then((response) => response.json())
            .then((data) => setBlogs(data))
            .catch((error) => console.error('Error fetching blogs:', error));
    }, []);



// 

    return (
        <>
            <div className="hero font-rubik min-h-screen  bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/1sbmxF7/2.png)' }}>
            <div className="hero-content flex justify-end items-center text-neutral-content">
    <div className="max-w-6xl md:ml-96">
        <h1 className="mb-12 md:text-8xl text-5xl text-white text-center capitalize">
            Most <br /> helpful Tips
        </h1>
        <div className='container mx-auto flex flex-col items-center justify-center justify-items-center gap-6'>
            {blogs.map((blog) => (

                <Link key={blog._id}
                    to={`tips/${blog._id}`}
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

export default Tips