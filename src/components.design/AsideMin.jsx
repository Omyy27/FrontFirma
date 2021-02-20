import React from "react";
import { BsChatSquareDotsFill } from "react-icons/bs";
import { FaAudioDescription, FaNewspaper, FaUserFriends } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const AsideMin = () => {
  return (
    <>
      <ul className="list-group text-center">
        <li className="menu-item" data-container="body" data-toggle="tooltip" data-placement="right" title="Dashboard">
          <Link to="/" className="menu-link">
            <span className="svg-icon menu-icon minicon">
              <MdDashboard />
            </span>
          </Link>
        </li>
        <li className="menu-item mt-3" data-container="body" data-toggle="tooltip" data-placement="right" title="Reuniones">
          <Link to="/reuniones" className="menu-link">
            <span className="svg-icon menu-icon minicon">
              <BsChatSquareDotsFill />
            </span>
          </Link>
        </li>
        <li className="menu-item mt-3" data-container="body" data-toggle="tooltip" data-placement="right" title="Participantes">
          <Link to="/participantes" className="menu-link">
            <span className="svg-icon menu-icon minicon">
              <FaUserFriends />
            </span>
          </Link>
        </li>

        <li className="menu-item mt-3" data-container="body" data-toggle="tooltip" data-placement="right" title="Actas">
          <Link to="/actas" className="menu-link">
            <span className="svg-icon menu-icon minicon">
              <FaNewspaper />
            </span>
          </Link>
        </li>

        <li className="menu-item mt-3" data-container="body" data-toggle="tooltip" data-placement="right" title="Example content">
          <a href="#" className="menu-link">
            <span className="svg-icon menu-icon minicon">
              <FaAudioDescription />
            </span>
          </a>
        </li>
      </ul>
    </>
  );
};

export default AsideMin;
