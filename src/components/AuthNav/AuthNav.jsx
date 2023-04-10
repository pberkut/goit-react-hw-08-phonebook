import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={css.links}>
      <NavLink
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? 'bold' : '',
            color: isPending ? 'red' : 'black',
          };
        }}
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? 'bold' : '',
            color: isPending ? 'red' : 'black',
          };
        }}
        to="/login"
      >
        Log In
      </NavLink>
    </div>
  );
};

export { AuthNav };
