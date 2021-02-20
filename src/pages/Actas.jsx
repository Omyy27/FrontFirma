import React from "react";
import { Link } from "react-router-dom";
import { BsNewspaper } from "react-icons/bs";

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
          <div className="container-fluid">
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
                  <div className="col-xl-4">
                    {/*begin::Engage Widget 2*/}
                    <div className="card card-custom card-stretch gutter-b">
                      <div className="card-body d-flex p-0">
                        <div className="flex-grow-1 bg-success p-8 card-rounded flex-grow-1 bgi-no-repeat" style={{backgroundPosition: 'calc(100% + 0.5rem) bottom', backgroundSize: 'auto 70%', backgroundImage: 'url(assets/media/svg/humans/custom-3.svg)'}}>
                          <h4 className="text-inverse-danger mt-2 font-weight-bolder">Actas de reunión</h4>
                          <p className="text-inverse-danger my-6">Boost marketing &amp; sales
                            <br />through product confidence.</p>
                            <Link to="/crearacta" className="btn btn-warning mr-2 font-weight-bold py-2 px-6">Crear</Link>
                          
                          <a href="#" className="btn btn-warning font-weight-bold py-2 px-6 mf-2">Learn</a>
                        </div>
                      </div>
                    </div>
                    {/*end::Engage Widget 2*/}
                  </div>
                  <div className="col-xl-4">
                    {/*begin::Engage Widget 2*/}
                    <div className="card card-custom card-stretch gutter-b">
                      <div className="card-body d-flex p-0">
                        <div className="flex-grow-1 bg-danger p-8 card-rounded flex-grow-1 bgi-no-repeat" style={{backgroundPosition: 'calc(100% + 0.5rem) bottom', backgroundSize: 'auto 70%', backgroundImage: 'url(assets/media/svg/humans/custom-3.svg)'}}>
                          <h4 className="text-inverse-danger mt-2 font-weight-bolder">Actas de cambios</h4>
                          <p className="text-inverse-danger my-6">Boost marketing &amp; sales
                            <br />through product confidence.</p>
                          <a href="#" className="btn btn-warning mr-2 font-weight-bold py-2 px-6">Learn</a>
                          <a href="#" className="btn btn-warning font-weight-bold py-2 px-6 mf-2">Learn</a>
                        </div>
                      </div>
                    </div>
                    {/*end::Engage Widget 2*/}
                  </div>
                  <div className="col-xl-4">
                    {/*begin::Engage Widget 2*/}
                    <div className="card card-custom card-stretch gutter-b">
                      <div className="card-body d-flex p-0">
                        <div className="flex-grow-1 bg-warning p-8 card-rounded flex-grow-1 bgi-no-repeat" style={{backgroundPosition: 'calc(100% + 0.5rem) bottom', backgroundSize: 'auto 70%', backgroundImage: 'url(assets/media/svg/humans/custom-3.svg)'}}>
                          <h4 className="text-inverse-danger mt-2 font-weight-bolder">Actas de inicio de proyecto</h4>
                          <p className="text-inverse-danger my-6">Boost marketing &amp; sales
                            <br />through product confidence.</p>
                          <a href="#" className="btn btn-warning mr-2 font-weight-bold py-2 px-6">Learn</a>
                          <a href="#" className="btn btn-warning font-weight-bold py-2 px-6 mf-2">Learn</a>
                        </div>
                      </div>
                    </div>
                    {/*end::Engage Widget 2*/}
                  </div>

                   
                  </div>
                  <div className="row mt-5">
                  <div className="col-xl-4">
                    {/*begin::Engage Widget 2*/}
                    <div className="card card-custom card-stretch gutter-b">
                      <div className="card-body d-flex p-0">
                        <div className="flex-grow-1 bg-primary p-8 card-rounded flex-grow-1 bgi-no-repeat" style={{backgroundPosition: 'calc(100% + 0.5rem) bottom', backgroundSize: 'auto 70%', backgroundImage: 'url(assets/media/svg/humans/custom-3.svg)'}}>
                          <h4 className="text-inverse-danger mt-2 font-weight-bolder">Actas de cierre de proyecto</h4>
                          <p className="text-inverse-danger my-6">Boost marketing &amp; sales
                            <br />through product confidence.</p>
                          <a href="#" className="btn btn-warning mr-2 font-weight-bold py-2 px-6">Learn</a>
                          <a href="#" className="btn btn-warning font-weight-bold py-2 px-6 mf-2">Learn</a>
                        </div>
                      </div>
                    </div>
                    {/*end::Engage Widget 2*/}
                  </div>
                  <div className="col-xl-4">
                    {/*begin::Engage Widget 2*/}
                    <div className="card card-custom card-stretch gutter-b">
                      <div className="card-body d-flex p-0">
                        <div className="flex-grow-1 bg-info p-8 card-rounded flex-grow-1 bgi-no-repeat" style={{backgroundPosition: 'calc(100% + 0.5rem) bottom', backgroundSize: 'auto 70%', backgroundImage: 'url(assets/media/svg/humans/custom-3.svg)'}}>
                          <h4 className="text-inverse-danger mt-2 font-weight-bolder">Actas de aprobación, visual mapping y diseño</h4>
                          <p className="text-inverse-danger my-6">Boost marketing &amp; sales
                            <br />through product confidence.</p>
                          <a href="#" className="btn btn-warning mr-2 font-weight-bold py-2 px-6">Learn</a>
                          <a href="#" className="btn btn-warning font-weight-bold py-2 px-6 mf-2">Learn</a>
                        </div>
                      </div>
                    </div>
                    {/*end::Engage Widget 2*/}
                  </div>
                  <div className="col-xl-4">
                    {/*begin::Engage Widget 2*/}
                    <div className="card card-custom card-stretch gutter-b">
                      <div className="card-body d-flex p-0">
                        <div className="flex-grow-1 bg-success p-8 card-rounded flex-grow-1 bgi-no-repeat" style={{backgroundPosition: 'calc(100% + 0.5rem) bottom', backgroundSize: 'auto 70%', backgroundImage: 'url(assets/media/svg/humans/custom-3.svg)'}}>
                          <h4 className="text-inverse-danger mt-2 font-weight-bolder">Actas de autorización</h4>
                          <p className="text-inverse-danger my-6">Boost marketing &amp; sales
                            <br />through product confidence.</p>
                          <a href="#" className="btn btn-warning mr-2 font-weight-bold py-2 px-6">Learn</a>
                          <a href="#" className="btn btn-warning font-weight-bold py-2 px-6 mf-2">Learn</a>
                        </div>
                      </div>
                    </div>
                    {/*end::Engage Widget 2*/}
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
