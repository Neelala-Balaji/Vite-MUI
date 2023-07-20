import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const HomeLayout = () => {
  return (
    <div className="overflow-auto h-screen scroll-smooth">
      <Header />
      <div className="min-h-screen relative top-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
