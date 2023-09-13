import { useState } from "react"
import Blogs from "./components/Blog/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"
import Header from "./components/Header/Header"

function App() {
  const [bookmark,setBookmark] = useState([]);
  const handleAddToBookMarks = (blog) => {
    const newBookmarks = [...bookmark,blog]
    setBookmark(newBookmarks);
  }
  // Mark As Read Click 
  const [readingTime,setReadingTime] = useState(0);
  const handleMarkAsRead = (id,time) => {
    setReadingTime(readingTime + time);
    // Remove the read blog from bookmark;
    // console.log('remove bookmark',id);
    const remainingBookMarks = bookmark.filter(bookmark => bookmark.id !== id);
    setBookmark(remainingBookMarks)
    
  }

  return (
    <>
     
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
      <Blogs handleAddToBookMarks={handleAddToBookMarks} handleMarkAsRead = {handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks ={bookmark} readingTime={readingTime}></Bookmarks>
      </div>
    
    </>
  )
}

export default App
