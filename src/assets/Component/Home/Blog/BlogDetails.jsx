import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams();
    const allBlogs = useLoaderData();
    const blog = allBlogs.find(maid => maid._id == id);
    // console.log(blog);
    const { title, content, _id, featured_image_url } = blog;
    return (
        <div className='font-rubik'>
            <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-100 text-gray-800">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src={featured_image_url} alt="" className="w-full  h-60 sm:h-96 bg-gray-500" />
                    <div className="p-6 pb-12 container mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-50">
                        <div className="space-y-2">
                            <h2 rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl text-[#065FB1]">
                            {title}
                            </h2>



                            <p className="text-xs text-gray-600">By <span rel="noopener noreferrer" href="#" className="text-xs hover:underline">Maids Central</span>
                            </p>
                        </div>
                        <div className="text-gray-800  font-normal leading-7">
                            <div dangerouslySetInnerHTML={{ __html: content }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails
