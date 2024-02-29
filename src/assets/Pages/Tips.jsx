import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Tips = () => {


    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('https://maid-central-server-hvpt7kzb9-kazi-md-khorshed-alams-projects.vercel.app/blogs')
            .then((response) => response.json())
            .then((data) => {
                // Filter the articles by their type being 'blog'
                const blogs = data.filter((article) => article.type === 'tips');
                setArticles(blogs);
            })
            .catch((error) => console.error('Error fetching blogs:', error));
    }, []);



// 

    return (
        <>
            <div className="hero font-rubik min-h-screen  bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/7jH01dX/tips-STORIES.png)' }}>
            <div className="hero-content flex justify-end items-center text-neutral-content">
    <div className="max-w-6xl md:ml-96">
        <h1 className="mb-12 md:text-7xl text-5xl text-black text-center capitalize">
            Most helpful Tips
        </h1>
        <div className='container mx-auto flex flex-col items-center justify-center justify-items-center gap-6'>
            {articles.map((blog) => (

                <Link key={blog._id}
                    to={`tips/${blog._id}`}
                    type="button"
                    className="px-8 py-3 w-72 text-center font-semibold rounded-full bg-white border border-black text-black"
                >
                    {blog.title}
                </Link>
            ))}
            <div className="space-y-3 mx-auto">
              <div className="flex justify-start space-x-3">

                <a rel="noopener noreferrer" href="#" title="Facebook" className="flex items-center p-1">
                <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#0F0F0F"></path> </g></svg>
                </a>




                <a rel="noopener noreferrer" href="#" title="Twitter" className="flex items-center p-1">
                 <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <circle cx="12" cy="12.0001" r="4.44444" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle> <path d="M18 6.0217V6" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                </a>

              </div>
        </div>
        </div>
        
        
    </div>
</div>

            </div>
        </>
    )
}

export default Tips