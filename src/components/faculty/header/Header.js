import React from "react";
import app from "../../../Firebase";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const signout = () => app.auth().signOut();
  return (
    <div className="Header_F shadow-sm bg-white d-flex flex-row align-items-center justify-content-between p-3">
      <div className="navbar-brand">
        <h3 className="p-0 m-0">
          <Link to="/">Internia</Link>
        </h3>
      </div>
      <div className="dropdown text-center">
        <img
          src="/assets/images/user.jpeg"
          className="dropdown-toggle rounded-circle shadow-sm border-0"
          alt="user__avatar"
          data-toggle="dropdown"
          aria-expanded="false"
          style={{ width: "3em", height: "3em", cursor: "pointer" }}
        />
        <ul className="dropdown-menu dropdown-menu-right shadow-sm border-0 py-2">
          <Link to="/" className="text-decoration-none">
            <li className="dropdown-item">
              <i className="fa fa-fw mr-2 fa-coffee fa-sm" />
              Browse Internships
            </li>
          </Link>
          <Link to="/floated-internships" className="text-decoration-none">
            <li className="dropdown-item">
              <i className="fa fa-fw mr-2 fa-coffee fa-sm" />
              Floated Internships
            </li>
          </Link>
          <Link to="/create-internships" className="text-decoration-none">
            <li className="dropdown-item">
              <i className="fa fa-fw mr-2 fa-list fa-sm" />
              Create Internship
            </li>
          </Link>
          <Link to="/profile" className="text-decoration-none">
            <li className="dropdown-item">
              <i className="fa fa-fw mr-2 fa-user" />
              Profile
            </li>
          </Link>
          <li className="dropdown-item btn rounded-0" onClick={signout}>
            <i className="fa fa-fw mr-2 fa-lock fa-sm" />
            Sign out
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
