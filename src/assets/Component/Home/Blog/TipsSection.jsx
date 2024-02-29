import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const TipsSection = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('https://maid-central-server-npw1g5hho-kazi-md-khorshed-alams-projects.vercel.app/blogs')
            .then((response) => response.json())
            .then((data) => {
                // Filter the articles by their type being 'blog'
                const blogs = data.filter((article) => article.type === 'tips');
                setArticles(blogs);
            })
            .catch((error) => console.error('Error fetching blogs:', error));
    }, []);

    return (
        <div className="bg-gray-100 my-6 text-gray-900">
            <div className="container grid grid-cols-12 mx-auto">
                <div
                    className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover bg-slate-400  lg:col-span-6 lg:h-auto"
                    style={{
                        backgroundImage: "url('https://i.ibb.co/cwzk0hQ/tips.png')",
                        backgroundPosition: 'center center',
                        backgroundBlendMode: 'multiply',
                        backgroundSize: 'cover',
                    }}
                >
                    <div className="flex flex-col items-center p-8 py-12 text-center">
                        <span>12 June</span>
                        <h1 className="py-4 text-5xl text-white font-bold">Most
                            Helpful Tips</h1>
                        <p className="pb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, a!</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </div>
                </div>
                <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-300">
                    {articles.map((blog) => (
                        <Link key={blog._id} to={`tips/${blog._id}`}>
                            <div className="pt-6 pb-4 space-y-2">
                                <span>Maids Central</span>
                                <h1 className="text-3xl font-bold"> {blog.title}</h1>
                                <p>{blog.content.slice(0, 150)}</p>
                                <div className="inline-flex items-center py-2 space-x-2 text-sm text-violet-600">
                                    <span>Read more</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TipsSection;
