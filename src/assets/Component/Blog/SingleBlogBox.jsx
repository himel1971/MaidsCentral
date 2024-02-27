import React from 'react'
import { Link } from 'react-router-dom'

const SingleBlogBox = ({blog}) => {
  return (
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
  )
}

export default SingleBlogBox