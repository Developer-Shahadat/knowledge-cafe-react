import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import Blog from "./Blog";

const Blogs = ({handleAddToBookMarks}) => {
    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data));
    },[])
    return (
        <div className="md:w-2/3">
             <h1 className="text-3xl">Blogs : {blogs.length}</h1>
             {
                blogs.map(blog => <Blog  key={blog.id} blog = {blog} handleAddToBookMarks ={handleAddToBookMarks}></Blog>)
             }
        </div>
    );
};

Blogs.propTypes ={
    handleAddToBookMarks: PropTypes.func.isRequired
}

export default Blogs;