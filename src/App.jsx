import ProtectedRoute from "./components/ProtectedRoute";
import Backoffice from "./pages/backoffice/Backoffice";
import { useRoutes } from "react-router-dom";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import { useAuthContext } from "./context/useAuthContext";
import {
  BackofficeActivities,
  BackofficeReviews,
  BackofficeStays,
} from "./pages/backoffice/BackofficeItems";
import ActivityForm from "./pages/backoffice/forms/ActivityForm";

import Home from "./pages/Home/Home";
import Stay from "./pages/Stay/Stay";
import StaySingle from "./pages/Stay/StaySingle";
import Contact from "./pages/contact/contact";
import Activities from "./pages/Activities/Activities";

function App() {
  const { signedIn } = useAuthContext();

  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/stay",
      element: <Stay />,
    },
    {
      path: "/stay/:id",
      element: <StaySingle />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/activities",
      element: <Activities />,
    },
    {
      path: "/backoffice",
      element: <Backoffice />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/backoffice",
      element: (
        <ProtectedRoute isAllowed={signedIn}>
          <Backoffice />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "reviews",
          element: <BackofficeReviews />,
        },
        {
          path: "stays",
          element: <BackofficeStays />,
        },
        {
          path: "activities",
          element: <BackofficeActivities />,
          children: [
            {
              path: "add",
              element: <ActivityForm />,
            },
            {
              path: "edit/:id",
              element: <ActivityForm isEditMode={true} />,
            },
          ],
        },
      ],
    },
  ]);

  return (
    <div className="app">
      <div className="main">{routes}</div>
      <Footer />
    </div>
  );
}

export default App;
