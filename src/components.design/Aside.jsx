import React from "react";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { FaNewspaper, FaUserFriends, FaAudioDescription } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
const Aside = () => {
  return (
    <>
      {/*begin::Aside*/}
      {/* */}
      <div
        className="aside aside-left d-flex flex-column flex-row-auto"
        id="kt_aside"
      >
        {/*begin::Aside Menu*/}
        <div
          className="aside-menu-wrapper flex-column-fluid"
          id="kt_aside_menu_wrapper"
        >
          {/*begin::Menu Container*/}
          <div
            id="kt_aside_menu"
            className="aside-menu min-h-lg-800px"
            data-menu-vertical={1}
            data-menu-scroll={1}
            data-menu-dropdown-timeout={500}
          >
            {/*begin::Menu Nav*/}
            <ul className="menu-nav">
              <li className="menu-item menu-item-active" aria-haspopup="true">
                <Link to="/" className="menu-link">
                  <span className="svg-icon menu-icon">
                    <MdDashboard />
                  </span>
                  <span className="menu-text">Dashboard</span>
                </Link>
              </li>

              <li className="menu-section">
                <h4 className="menu-text">Menú</h4>
                <i className="menu-icon ki ki-bold-more-hor icon-md" />
              </li>
              <li className="menu-item" aria-haspopup="true">
                <Link to="/reuniones" className="menu-link">
                  <span className="svg-icon menu-icon">
                    <BsChatSquareDotsFill />
                  </span>
                  <span className="menu-text">Reuniones</span>
                </Link>
              </li>

              <li className="menu-item" aria-haspopup="true">
                <Link to="/participantes" className="menu-link">
                  <span className="svg-icon menu-icon">
                    <FaUserFriends />
                  </span>
                  <span className="menu-text">Participantes</span>
                </Link>
              </li>

              <li className="menu-item" aria-haspopup="true">
                <Link to="/actas" className="menu-link">
                  <span className="svg-icon menu-icon">
                    <FaNewspaper />
                  </span>
                  <span className="menu-text">Actas</span>
                </Link>
              </li>

              <li className="menu-item" aria-haspopup="true">
                <a href="#" className="menu-link">
                  <span className="svg-icon menu-icon">
                    <FaAudioDescription />
                  </span>
                  <span className="menu-text">Ejemplo</span>
                </a>
              </li>
            </ul>
            {/*end::Menu Nav*/}
          </div>
          {/*end::Menu Container*/}
        </div>
        {/*end::Aside Menu*/}
      </div>
      
      {/*end::Aside*/}
    </>
  );
};

export default Aside;
