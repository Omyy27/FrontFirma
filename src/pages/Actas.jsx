import React from "react";
import { Link } from "react-router-dom";
import { BsNewspaper } from "react-icons/bs";
import photo from "../images/acta-1.jpg";
import photo2 from "../images/acta-2.jpg";
import photo3 from "../images/acta-3.jpg";
import photo4 from "../images/acta-4.jpg";
import photo5 from "../images/acta-5.jpg";
import photo6 from "../images/acta-6.jpg";

const Actas = () => {
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
          <div className="container">
            <div className="card card-custom">
              <div className="card-header">
                <div className="card-title mt-2">
                  <span className="card-icon">
                    <BsNewspaper className="text-primary" />
                  </span>
                  <h3 className="card-label">Actas</h3>
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
                <div>
                  <div className="row">
                    <div className="col-md-4">
                      <p className="font-weight-boldest text-center">
                        Actas de reunión
                        <div class="separator separator-solid separator-border-3"></div>
                      </p>

                      <div className="card card-custom overlay">
                        <div className="card-body p-0">
                          <div className="overlay-wrapper">
                            <img src={photo} alt="" className="w-100 rounded" />
                          </div>

                          <div className="overlay-layer">
                            <a
                              href="#"
                              className="btn font-weight-bold btn-primary btn-shadow"
                            >
                              Crear
                            </a>
                            <a
                              href="#"
                              className="btn font-weight-bold btn-light-primary btn-shadow ml-2"
                            >
                              Ver listado
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                    <p className="font-weight-boldest text-center">
                        Actas de cambios
                        <div class="separator separator-solid separator-border-3"></div>
                      </p>
                      <div className="card card-custom overlay">
                        <div className="card-body p-0">
                          <div className="overlay-wrapper">
                            <img
                              src={photo2}
                              alt=""
                              className="w-100 rounded"
                            />
                          </div>
                          <div className="overlay-layer">
                            <a
                              href="#"
                              className="btn font-weight-bold btn-primary btn-shadow"
                            >
                              Explore
                            </a>
                            <a
                              href="#"
                              className="btn font-weight-bold btn-light-primary btn-shadow ml-2"
                            >
                              Purchase
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                    <p className="font-weight-boldest text-center">
                        Actas de inicio de proyecto
                        <div class="separator separator-solid separator-border-3"></div>
                      </p>
                      <div className="card card-custom overlay">
                        <div className="card-body p-0">
                          <div className="overlay-wrapper">
                            <img
                              src={photo3}
                              alt=""
                              className="w-100 rounded"
                            />
                          </div>
                          <div className="overlay-layer">
                            <a
                              href="#"
                              className="btn font-weight-bold btn-primary btn-shadow"
                            >
                              Explore
                            </a>
                            <a
                              href="#"
                              className="btn font-weight-bold btn-light-primary btn-shadow ml-2"
                            >
                              Purchase
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-md-4">
                    <p className="font-weight-boldest text-center">
                        Actas de cierre de proyecto
                        <div class="separator separator-solid separator-border-3"></div>
                      </p>
                      <div className="card card-custom overlay">
                        <div className="card-body p-0">
                          <div className="overlay-wrapper">
                            <img
                              src={photo4}
                              alt=""
                              className="w-100 rounded"
                            />
                          </div>
                          <div className="overlay-layer">
                            <a
                              href="#"
                              className="btn font-weight-bold btn-primary btn-shadow"
                            >
                              Explore
                            </a>
                            <a
                              href="#"
                              className="btn font-weight-bold btn-light-primary btn-shadow ml-2"
                            >
                              Purchase
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                    <p className="font-weight-boldest text-center">
                        Actas de aprobación, visual mappging y diseño
                        <div class="separator separator-solid separator-border-3"></div>
                      </p>
                      <div className="card card-custom overlay">
                        <div className="card-body p-0">
                          <div className="overlay-wrapper">
                            <img
                              src={photo5}
                              alt=""
                              className="w-100 rounded"
                            />
                          </div>
                          <div className="overlay-layer">
                            <a
                              href="#"
                              className="btn font-weight-bold btn-primary btn-shadow"
                            >
                              Explore
                            </a>
                            <a
                              href="#"
                              className="btn font-weight-bold btn-light-primary btn-shadow ml-2"
                            >
                              Purchase
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                    <p className="font-weight-boldest text-center">
                        Actas de autorización
                        <div class="separator separator-solid separator-border-3"></div>
                      </p>
                      <div className="card card-custom overlay">
                        <div className="card-body p-0">
                          <div className="overlay-wrapper">
                            <img
                              src={photo6}
                              alt=""
                              className="w-100 rounded"
                            />
                          </div>
                          <div className="overlay-layer">
                            <a
                              href="#"
                              className="btn font-weight-bold btn-primary btn-shadow"
                            >
                              Explore
                            </a>
                            <a
                              href="#"
                              className="btn font-weight-bold btn-light-primary btn-shadow ml-2"
                            >
                              Purchase
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4" />
                    <div className="col-md-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Actas;
