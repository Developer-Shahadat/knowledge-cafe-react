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
  return (
    <>
     
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
      <Blogs handleAddToBookMarks={handleAddToBookMarks}></Blogs>
      <Bookmarks bookmarks ={bookmark}></Bookmarks>
      </div>
    
    </>
  )
}

export default App
