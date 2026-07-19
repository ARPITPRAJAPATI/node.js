import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePost from "./pages/CreatePost.jsx";
import Feed from "./pages/Feed.jsx";


function Home() {
  return <h1>HOME PAGE</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/about" element={<h1>ABOUT PAGE</h1>} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;