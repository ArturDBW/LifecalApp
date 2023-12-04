import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GetBasicInformation } from "./pages/GetBasicInformation";
import { AppLayout } from "./ui/AppLayout";
import { Home } from "./pages/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: `#43a047`,
    },
  },
});

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
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
