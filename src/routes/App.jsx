import React from "react";
import {
  Routes,
  Route,
  Outlet,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "../pages/Home";
import Users from "../pages/Users";
import NotFound from "../pages/NotFound";
import { HomeLayout } from "../layouts/HomeLayout";
// import { PageLoader } from "../components/loaders";

// const Suspend = ({ children }) => (
//   <React.Suspense fallback={<PageLoader />}>{children}</React.Suspense>
// );

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HomeLayout />}>
      <Route index element={<Home />} />
      <Route path="Users" element={<Users />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
