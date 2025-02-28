import { Outlet } from "react-router-dom";
import BackofficeNavigation from "./navigation/BackofficeNavigation";
import UserProfile from "./userProfile/UserProfile";
import "./backoffice.css";

const Backoffice = () => {
  return (
    <article className="backoffice">
      <h1>Backoffice</h1>
      <UserProfile />
      <BackofficeNavigation />

      <div className="backofficeContent">
        <Outlet />
      </div>
    </article>
  );
};
export default Backoffice;
