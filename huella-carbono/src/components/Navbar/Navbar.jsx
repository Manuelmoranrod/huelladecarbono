import React from "react";
import { Link } from 'react-router-dom';

import user from '../../assets/useri.svg';
import ranking from '../../assets/ranking.svg';
import compensar from '../../assets/compensar.svg';
import track from '../../assets/actualizar.svg';



const Navbar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li className="nav-element"><Link to='/myplan'><img src={compensar} alt="compensar"/></Link></li>
        <li className="nav-element"><Link to='/ranking'><img src={ranking} alt="ranking"/></Link></li>
        <li className="nav-element"><Link to='/track'><img src={track} alt="track"/></Link></li>
        <li className="nav-element"><Link to='/profile'><img src={user} alt="user"/></Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
