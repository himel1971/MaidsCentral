import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Assuming this is the API endpoint for getting blogs
    fetch('http://localhost:5000/blogs')
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <div className='container mx-auto overflow-hidden'>
      <h1 className='my-10 text-center font-medium text-4xl uppercase font-rubik text-[#0856A9] underline'>Read all of our blogs</h1>
      {blogs.map((blog, index) => (
        <Link
          className=''
          to={`/blog/${blog._id}`}
          key={blog._id} 
        >
          <div className="text-gray-900 grid gap-12 my-4 font-rubik">
            <div className="   gap-12 mx-auto border bg-gray-50">
              <div className="flex flex-col p-6  lg:col-span-8 lg:p-10">
                <div className="flex justify-start">
                  <span className="px-2 py-1 text-xs rounded-full bg-[#00ADEE] text-gray-50">Maid Central</span>
                </div>
               <div>
               <h1 className="text-3xl font-semibold">{blog.title}.</h1>
                <p className="flex-1 pt-2">
                  {blog.content.slice(0, 150)}......
                </p>
               </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
