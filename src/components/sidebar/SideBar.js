import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return <>
    <div className='side-bar'>
      <div className='side-card'>
        <Link to={'/'}>Home</Link>
        <Link to={'/askquestion'}>Questions</Link>
        <Link to={'/tags'}>Tags</Link>
        <Link to={"/users"}>Users</Link>
        <Link to={"/companies"}>Companies</Link>

      </div>
    </div>
  </>
}

export default SideBar;
