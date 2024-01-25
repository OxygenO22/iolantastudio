import { Outlet } from "react-router-dom";
import { Header } from "../ui/header/Header";
import { Footer } from "../ui/footer/Footer";
import s from "./Layout.module.scss";

export const Layout = () => {
  return (
    <>
      <header className={s.header__wrapper}>
        <Header />
      </header>
      <main className={s.main__wrapper}>
        <Outlet />
      </main>
      <footer className={s.footer__wrapper}>
        <Footer />
      </footer>
    </>
  );
}
