import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <NavLink to="/profile" activeClassName={styles.active}>
                        Profile
                    </NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/dialogs">Dialogs</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/news">News</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/music">Music</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/settings">Settings</NavLink>
                </li>
                <li className={styles.item}>
                    <NavLink to="/users">Users</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
