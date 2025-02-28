import { NavLink } from "react-router-dom";
import styles from "./BackofficeNavigation.module.css";

const BackofficeNavigation = () => {
  return (
    <ul className={styles.backofficeNavigation}>
      <li>
        <NavLink
          to="/backoffice/"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Home
        </NavLink>
        
        <NavLink
          to="/backoffice/activities"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Aktiviteter
        </NavLink>
        
        <NavLink
          to="/backoffice/stays"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Ophold
        </NavLink>

        <NavLink
          to="/backoffice/reviews"
          className={({ isActive }) => (isActive ? styles.active : "")}
        >
          Reviews
        </NavLink>
      </li>
    </ul>
  );
};

export default BackofficeNavigation;
