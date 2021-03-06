import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const logOut = ()=>{
    signOut(auth)
  }
  const menuItem =
    <div className='flex font-semibold uppercase text-xm'>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/appointment'>Appointment</Link></li>
      <li><Link to='/reviews'>Reviews</Link></li>
      <li><Link to='/contactus'>Contact Us</Link></li>
      {
        user? <button onClick={logOut} class="btn btn-ghost">Log Out</button> : <li><Link to='/login'>Login</Link></li>
      }
      
      <li><Link to='/signup'>Signup</Link></li>
    </div>
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItem}
          </ul>
        </div>
        <Link to='/' className="btn btn-ghost normal-case text-xl">Doctor Strange</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
        {menuItem}
        </ul>
      </div>
      
    </div>

  );
};

export default Navbar;