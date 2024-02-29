import React, { useState, useEffect } from 'react';
import SingleBlog from './SingleBlog';

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Assuming this is the API endpoint for getting blogs
    fetch('https://maid-central-server-hvpt7kzb9-kazi-md-khorshed-alams-projects.vercel.app/blogs')
      .then((response) => response.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error('Error fetching blogs:', error));
  }, []);

  return (
    <div>
      <section className="py-6 sm:py-12 text-gray-800">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center mb-10">
            <h2 className="text-3xl text-[#065FB1] font-bold capitalize">Top Stories of real people</h2>
            <p className="font-serif text-sm text-gray-600 capitalize">
              You'll find useful tips, insights, and updates about our services, the domestic helper industry, and more.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            {blogs.map((blog) => (
              <SingleBlog key={blog._id} blog={blog} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogSection;
