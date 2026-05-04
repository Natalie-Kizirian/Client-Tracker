import { MdPostAdd, MdMessage } from "react-icons/md";
/* import { SiPivotaltracker } from "react-icons/si";
 */
import { FaPlus } from "react-icons/fa6";
import classes from "./MainHeader.module.css";

function MainHeader({ onCreateNewClient }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <img src="../public/logo.png " alt="" />
        {/*  <SiPivotaltracker /> */}
        Client Tracker
      </h1>

      <div className={classes.client}>
        <h4>Clients</h4>
        <button className={classes.button} onClick={onCreateNewClient}>
          <FaPlus size={12} />
          New client
        </button>
      </div>
    </header>
  );
}
export default MainHeader;
