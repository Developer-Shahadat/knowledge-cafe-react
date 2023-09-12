import PropTypes from 'prop-types';
import Bookmark from './Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-20">
            <h4 className="text-center text-3xl mt-4">BookMarked Blog : {bookmarks.length} </h4> 
            {
                bookmarks.map(bookmark => <Bookmark key ={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array.isRequired
}
export default Bookmarks;