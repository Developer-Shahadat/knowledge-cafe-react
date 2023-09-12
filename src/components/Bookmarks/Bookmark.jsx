import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='mt-10 text-2xl bg-slate-200 p-4 m-6 rounded-xl'>
            <h3>{title}</h3>
        </div>
    );
};

Bookmark.propTypes ={
    bookmark: PropTypes.object.isRequired
}
export default Bookmark;