import React from "react";
import styles from './styles.module.css';

const Main = () => {

    const handleLogout =()=>{
             localStorage.removeItem("token");
             window.location.reload();
    }
    return (
        <div className={styles.main_containers}>
            <nav className={styles.navbar}>
                <h1>ChessWizards</h1>
                 <button className={styles.white_btn} onClick={handleLogout}>
                     LogOut
                 </button>

            </nav>
        </div>
      );
}
 
export default Main;