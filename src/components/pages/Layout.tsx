import { Outlet } from "react-router-dom";
import { Header } from "../ui/header/Header";
import { Footer } from "../ui/footer/Footer";
import s from "./Layout.module.scss";

export const Layout = () => {
  return (
    <>
      <header className={s.header}>
        <Header />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
