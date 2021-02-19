import React from "react";
import { Link } from "react-router-dom";
import TablaReuniones from "../components.design/TablaReuniones";

const Reuniones = () => {
  return (
    <>
      {/*begin::Content*/}
      <div
        className="content d-flex flex-column flex-column-fluid"
        id="kt_content"
      >
        {/*begin::Entry*/}
        <div className="d-flex flex-column-fluid">
          {/*begin::Container*/}
          <div className="container-fluid">
            <div className="card card-custom">
              <div className="card-header">
                <div className="card-title">
                  <span className="card-icon">
                    <i className="flaticon2-chat-1 text-primary"></i>
                  </span>
                  <h3 className="card-label">Reuniones</h3>
                </div>
                <div className="card-toolbar">
                  <Link
                    to="/AgregarReunion"
                    className="btn btn-sm btn-success font-weight-bold"
                  >
                    <i className="flaticon2-cube"></i> Agregar
                  </Link>
                </div>
              </div>
              <div className="card-body">
                <TablaReuniones />
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button className="btn btn-light-primary font-weight-bold">
                  Manage
                </button>
                <button
                  
                  className="btn btn-outline-secondary font-weight-bold"
                >
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reuniones;
