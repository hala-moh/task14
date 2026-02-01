import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";

export default function Layout() {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <>
      <Navbar />
      <Outlet context={{ selectedPost, setSelectedPost }} />
    </>
  );
}