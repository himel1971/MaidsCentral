import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleBlogBox from '../Component/Blog/SingleBlogBox';
import SingleBlog from '../Component/Home/Blog/SingleBlog';

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
    <div className='container mx-auto my-6 overflow-hidden'>
      <h1 className='my-10 text-center font-medium text-4xl uppercase font-rubik text-[#0856A9] underline'>Read all of our blogs</h1>
      {/* {blogs.map((blog, index) => (
       <SingleBlogBox key={index} blog={blog}></SingleBlogBox>
      ))} */}
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {blogs.map((blog) => (
              <SingleBlog key={blog._id} blog={blog} />
            ))}
          </div>
    </div>
  );
};

export default Blog;
