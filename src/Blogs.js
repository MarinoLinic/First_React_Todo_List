import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Blogs = () => {

    const [blogs, setBlogs] = useState([
        { title: "My new website", body: "lorem ipsum", author: "Marino", id: 1 },
        { title: "Welcome party", body: "lorem ipsum", author: "Dorian", id: 2 },    
        { title: "Web dev tool tips", body: "lorem ipsum", author: "Fran", id: 3 }        
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => { // can be used to fetch data
        console.log(blogs);
    }, []); // [] makes sure it only runs on dependency change

    return (  // could also use forEach
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === "Marino")} handleDelete={handleDelete} title="Filtered Marino's blogs" />
        </div>
    );
}

export default Blogs;