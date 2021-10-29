import React from 'react';
import './navbar.scss';
import image from '../navbar/imgs/Netflix-Logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <div className="container">
      <div className="left">
        <ul className="ulList">
          <a href="/#">
            <img
              style={{ width: '150px' }}
              alt="img"
              src={image}
              width="75px"
            />
          </a>
          <li>Home </li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>Recently added</li>
          <li>My List</li>
          <ul className="right">
            <li>
              <FontAwesomeIcon icon={faSearch} />
            </li>
            <li>Kids</li>
            <li>
              <FontAwesomeIcon icon={f0f3} />
            </li>
            <li>Profile</li>
          </ul>
        </ul>
      </div>
    </div>
  );
}
