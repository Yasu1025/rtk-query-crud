import { memo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import AddEdit from "../pages/AddEdit";
import Info from "../pages/Info";

const MyRouter = memo(() => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-contact" element={<AddEdit />} />
        <Route path="/edit-contact/:id" element={<AddEdit />} />
        <Route path="/info/:id" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
});

export default MyRouter;
