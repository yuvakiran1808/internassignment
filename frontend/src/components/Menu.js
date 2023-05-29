import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faHeart, faCalendar,faRightToBracket,faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { signout, isAuthenticated } from "../user/userapicalls";
const Menu = () => {
  return (
    <div className="px-3 shadow-sm ">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" style={{ color: "#F05537" }}>
            <b style={{ fontSize: "24px" }}>eventbrite</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse  justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2">
              <li className="nav-item   me-3">
                <Link
                  className="nav-link lead d-flex flex-md-column align-items-center"
                  aria-current="page"
                  to="/create/event"
                >
                  <FontAwesomeIcon
                    className=" me-2"
                    icon={faPlus}
                    beat
                    size="xl"
                    style={{ color: "#424cd7" }}
                  />
                  Create an event
                </Link>
              </li>
              {
                isAuthenticated()&&(
                  <li className="nav-item  me-3">
                <Link
                  className="nav-link lead d-flex flex-md-column align-items-center"
                  aria-current="page"
                  to="/likes"
                >
                  <FontAwesomeIcon
                    className=" me-2"
                    icon={faHeart}
                    size="xl"
                    style={{ color: "#424cd7" }}
                  />
                  Likes
                </Link>
              </li>
                )
              }
              
              <li className="nav-item  me-3">
                <Link
                  className="nav-link lead d-flex flex-md-column align-items-center"
                  aria-current="page"
                  to="/"
                >
                  <FontAwesomeIcon
                    className=" me-2"
                    icon={faCalendar}
                    size="xl"
                    style={{ color: "#424cd7" }}
                  />
                  GLobal Events
                </Link>
              </li>
              {!isAuthenticated() && (
                <>
                  <li className="nav-item  me-3">
                    <Link
                      className="nav-link lead d-flex flex-md-column align-items-center"
                      aria-current="page"
                      to="/signup"
                    >
                      <FontAwesomeIcon
                        className=" me-2"
                        icon={faUserPlus}
                        size="xl"
                        style={{ color: "#424cd7" }}
                      />
                      Signup
                    </Link>
                  </li>
                  <li className="nav-item  me-3">
                    <Link
                      className="nav-link lead d-flex flex-md-column align-items-center"
                      aria-current="page"
                      to="/signin"
                    >
                      <FontAwesomeIcon
                        className=" me-2"
                        icon={faRightToBracket}
                        size="xl"
                        style={{ color: "#424cd7" }}
                      />
                      Signin
                    </Link>
                  </li>
                </>
              )}
              {isAuthenticated() && (
                <li className="nav-item  me-3">
                  <Link
                    className="nav-link lead d-flex flex-md-column align-items-center"
                    to="/myevents"
                  >
                    <FontAwesomeIcon
                      className=" me-2"
                      icon={faCalendar}
                      size="xl"
                      style={{ color: "#424cd7" }}
                    />
                    My events
                  </Link>
                </li>
              )}
              {isAuthenticated() && (
                <li className="nav-item  me-3">
                  <Link
                    onClick={signout}
                    className="nav-link lead d-flex flex-md-column align-items-center"
                    to="/"
                  >
                    <FontAwesomeIcon
                      className=" me-2"
                      icon={faRightToBracket}
                      size="xl"
                      style={{ color: "#424cd7" }}
                    />
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Menu;
