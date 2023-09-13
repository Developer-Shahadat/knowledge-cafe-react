import PropTypes from 'prop-types';
import Bookmark from './Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-20">
            <div>
                <h3 className='text-2xl bg-slate-200 p-4 m-6 rounded-xl'>Reading Time : {readingTime} mins</h3>
            </div>
            <h4 className="text-center text-3xl mt-4">BookMarked Blog : {bookmarks.length} </h4> 
            {
                bookmarks.map(bookmark => <Bookmark key ={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number.isRequired
}
export default Bookmarks;