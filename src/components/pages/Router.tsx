import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Homepage } from "./Homepage/Homepage";
import { Blogpage } from "./Blogpage/Blogpage";
import { Aboutpage } from "./Aboutpage/Aboutpage";
import { Notfoundpage } from "./Notfoundpage/Notfoundpage";
import { Layout } from "./Layout";
import { Singlepage } from "./Singlepage/Singlepage";
import { PostsPage } from "./PostsPage/PostsPage";
import { LoginPage } from "./LoginPage/LoginPage";
import { RegisterPage } from "./RegisterPage/RegisterPage";
import { CreatePostPage } from "./CreatePostPage/CreatePostPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="posts" element={<PostsPage />} />
          <Route path="blog" element={<Blogpage />} />
          <Route path="about" element={<Aboutpage />} />
          <Route path="about/:id" element={<Singlepage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="createpost" element={<CreatePostPage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
