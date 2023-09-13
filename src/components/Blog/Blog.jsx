import PropTypes from 'prop-types'; // ES6
import { FaBookmark } from 'react-icons/fa';
const Blog = ({blog, handleAddToBookMarks,handleMarkAsRead}) => {
    const{id,title,cover,author_img,author,posted_date,reading_time,hashtags} = blog
    return (
        <div className='mt-4 space-y-4'>
            <img className='w-full mt-10' src={cover} alt="" />
            <div className='flex justify-between mt-4'>
                <div className='flex gap-2'>
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <p>{author}</p>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={() =>handleAddToBookMarks(blog)} className='ml-3'><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h4>Blog Title : {title}</h4>
            <p>
                {hashtags.map((hash,idx) => <span key={idx}> <a href="">#{hash}</a> </span>)}
            </p>
            <button onClick={()=>handleMarkAsRead(id,reading_time)} className='text-purple-600 underline'>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired,
    handleAddToBookMarks:PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func.isRequired  
}
export default Blog;