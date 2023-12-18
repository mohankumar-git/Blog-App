import React from "react";
import Home from "./pages/home/Home";
import NavBar from "./components/navbar/NavBar";
import { Routes, Route } from "react-router-dom";
import CreatePost from "./pages/createpost/CreatePost";
import PostDetail from "./pages/postdetail/PostDetail";
import EditPost from "./pages/editpost/EditPost";
import useThemeContext from "./hooks/useThemeContext";

function App() {
  const { theme } = useThemeContext();

  return (
    <>
      <div className={`bg-${theme}`} style={{minHeight: '100vh'}}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
