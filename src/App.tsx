import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GetBasicInformation } from "./pages/GetBasicInformation";
import { AppLayout } from "./ui/AppLayout";
import { Home } from "./pages/Home";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <GetBasicInformation />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
