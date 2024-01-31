import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Homepage } from "./Homepage/Homepage";
import { Blogpage } from "./Blogpage/Blogpage";
import { Aboutpage } from "./Aboutpage/Aboutpage";
import { Notfoundpage } from "./Notfoundpage/Notfoundpage";
import { Layout } from "./Layout";
import { Singlepage } from "./Singlepage/Singlepage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="blog" element={<Blogpage />} />
          <Route path="about" element={<Aboutpage />} />
          <Route path="about/:id" element={<Singlepage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
