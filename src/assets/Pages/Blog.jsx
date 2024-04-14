import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SingleBlog from '../Component/Home/Blog/SingleBlog';
import PulseSection from '../Component/Loader/PulseSection';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://maid-central-server-npw1g5hho-kazi-md-khorshed-alams-projects.vercel.app/blogs')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setBlogs(data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => setError(error.message)); // Catch and handle the error
  }, []);

  return (
    <div className='container mx-auto my-6 overflow-hidden'>
      <h1 className='my-10 text-center font-medium text-4xl uppercase font-rubik text-[#0856A9] underline'>Read all of our blogs</h1>
      {loading ? (

        // Show loader when data is being fetched
      <PulseSection></PulseSection>



      ) : (
        <div className="container grid mx-auto grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4 px-4">
          {blogs.map((blog) => (
            <SingleBlog key={blog._id} blog={blog} />
          ))}
        </div>
      )}
      {error && <p>Error fetching blogs: {error}</p>} {/* Display error message if error exists */}
    </div>
  );
};

export default Blog;
