import React from 'react'
import { Link } from 'react-router-dom'

const SingleBlog = ({ blog }) => {
    // console.log(blog);
    const { title, content, _id } = blog;
    return (
        <Link to={`blog/${_id}`}>
            <article className="flex flex-col bg-gray-50 h-full">
                <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
                <div className="flex flex-col flex-1 p-6">
                    <h1 rel="noopener noreferrer" href="#" className="text-xs  uppercase hover:underline text-[#065FB1]">MaidsCentral</h1>
                    <h3 className="flex-1 py-2 text-lg font-semibold text-black">{title}</h3>
                    <span className='text-[#00AEEF]'>Read More</span>
                </div>
            </article>
        </Link>
    )
}

export default SingleBlog
