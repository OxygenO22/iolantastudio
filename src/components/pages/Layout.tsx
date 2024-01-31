import { Outlet } from "react-router-dom";
import { Header } from "../ui/header/Header";
import { Footer } from "../ui/footer/Footer";
import s from "./Layout.module.scss";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/Hooks";
import { fetchUsers } from "../store/userSlice/userSlice";

export const Layout = () => {
  const { loading, error } = useAppSelector(state => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <header className={s.header__wrapper}>
        <Header />
      </header>
      <main className={s.main__wrapper}>
        <Outlet />
        {loading && <h2>Loading...</h2>}
        {error && <h2>An error occured: {error} </h2>}
      </main>
      <footer className={s.footer__wrapper}>
        <Footer />
      </footer>
    </>
  );
}
