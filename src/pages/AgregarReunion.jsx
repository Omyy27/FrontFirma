import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowGoBackLine } from "react-icons/ri";
import {
  FcAddressBook,
  FcApproval,
  FcCalendar,
  FcCheckmark,
  FcCustomerSupport,
  FcFile,
  FcFolder,
  FcGlobe,
} from "react-icons/fc";

const AgregarReunion = () => {
  const [meet, setMeet] = useState([]);
  const [reunion, setReunion] = useState([]);
  const [guests, setGuestes] = useState([]);
  const [create, setCreatemeet] = useState({
    user_id: "",
    record_id: "",
    date: "",
    place: "",
    guests: "",
    sms: "",
    mail: "",
    asunto: "",
    contenido: "",
    link: "",
    state: 1,
  });

  useEffect(() => {
    function list() {
      fetch("http://localhost:8000/api/lits/meeting/create") //Cambiar a ruta del servidor.
        .then((response) => response.json())
        .then((data) => {
          setMeet(data.data);
        });
    }
    list();
  }, []);

  function cambioInput(evento) {
    setCreatemeet({
      ...create,
      [evento.target.name]: evento.target.value,
    });
  }

  const enviarDatos = (event) => {
    event.preventDefault();
    fetch("http://localhost:8000/api/lits/meeting/create", {
      method: "POST",
      body: JSON.stringify(create),
      headers: {
        "Content-Type": "aplication/json",
      },
    }).then((response) => response.json());
  };

  useEffect(() => {
    function datos() {
      fetch("http://localhost:8000/api/list") //Cambiar a ruta del servidor.
        .then((response) => response.json())
        .then((data) => {
          setGuestes(data.data);
        });
    }
    datos();
  }, []);

  useEffect(() => {
    function meetin() {
      fetch("http://localhost:8000/api/record")
        .then((response) => response.json())
        .then((data) => {
          setReunion(data.data);
        });
    }
    meetin();
  });

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
                  <h3 className="card-label">Agregar reunión</h3>
                </div>
                <div className="card-toolbar">
                  <Link
                    to="/reuniones"
                    className="btn btn-sm btn-success font-weight-bold mr-2"
                  >
                    <RiArrowGoBackLine /> Atras
                  </Link>
                  <button className="btn btn-sm btn-success font-weight-bold">
                    <FcCheckmark /> Guardar
                  </button>
                </div>
              </div>
              <div className="card-body">
                <form onSubmit={enviarDatos} className="form">
                  <div className="form-group">
                    <div className="row">
                      <div className="col-md-3">
                        <label>Fecha:</label>
                        <div className="input-group">
                          <input
                            className="form-control"
                            type="datetime-local"
                            name="date"
                            onChange={cambioInput}
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">
                              <FcCalendar />
                            </span>
                          </div>
                        </div>
                        <span className="form-text text-muted">
                          Por favor ingresar fecha
                        </span>
                      </div>
                      <div className="col-md-5">
                        <label>Lugar:</label>
                        <div className="input-group">
                          <input
                            className="form-control"
                            type="text"
                            name="place"
                            onChange={cambioInput}
                            placeholder="Eg. Barranquilla"
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">
                              <FcGlobe />
                            </span>
                          </div>
                        </div>
                        <span className="form-text text-muted">
                          Por favor ingresar Lugar
                        </span>
                      </div>
                      <div className="col-md-4">
                        <label for="formGroupExampleInput">Actas</label>
                        {reunion.map((element) => (
                          <select
                            className="form-control"
                            id="exampleSelect1"
                            name="record_id"
                            onChange={cambioInput}
                          >
                            <option value={element.id}>{element.tophic}</option>
                          </select>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-md-8">
                      <div className="card">
                        <div className="card-header">
                          <div className="row">
                            <div className="col-md-10">
                              <h4>Participantes</h4>
                            </div>
                            <div className="col-md-2">
                              <Link
                                to="/participantes"
                                className="btn btn-sm btn-success font-weight-bold"
                              >
                                Agregar
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <table className="table table-striped table-hover">
                            <thead className="thead-light">
                              <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Telefono</th>
                                <th scope="col">Correo</th>
                              </tr>
                            </thead>
                            <tbody>
                              {guests.map((item) => (
                                <tr key={item.id}>
                                  <td>{item.name}</td>
                                  <td>{item.phone}</td>
                                  <td>{item.email}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group mt-2">
                        <label>Proyecto:</label>
                        <div className="input-group">
                          <input
                            className="form-control"
                            type="text"
                            name="project"
                            placeholder="Nombre del proyecto"
                            onChange={cambioInput}
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">
                              <FcFolder />
                            </span>
                          </div>
                        </div>
                        <span className="form-text text-muted">
                          Por favor ingresar nombre proyecto
                        </span>
                      </div>
                      <div className="form-group mt-2">
                        <label>Moderador:</label>
                        <div className="input-group">
                          <input
                            className="form-control"
                            type="text"
                            name="moderator"
                            onChange={cambioInput}
                            placeholder="Nombre moderador"
                          />
                          <div className="input-group-append">
                            <span className="input-group-text">
                              <FcCustomerSupport />
                            </span>
                          </div>
                        </div>
                        <span className="form-text text-muted">
                          Por favor ingresar moderador
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div class="col-md-4">
                      <label>Descripción:</label>
                      <div className="input-group">
                        <textarea
                          className="form-control"
                          type="text"
                          name="description"
                          placeholder="Descripcion de reunión"
                          rows={3}
                          onChange={cambioInput}
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <FcFile />
                          </span>
                        </div>
                      </div>
                      <span className="form-text text-muted">
                        Por favor ingresar descripción
                      </span>
                    </div>
                    <div class="col-md-4">
                      <label>Plataforma:</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          type="url"
                          name="link"
                          placeholder="Link reunión virtual"
                          onChange={cambioInput}
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <FcAddressBook />
                          </span>
                        </div>
                      </div>
                      <span className="form-text text-muted">
                        Por favor ingresar link de reunión
                      </span>
                    </div>
                    <div class="col-md-4">
                      <label>Estado:</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          type="text"
                          placeholder="Estado"
                          name="state"
                          onChange={cambioInput}
                        />
                        <div className="input-group-append">
                          <span className="input-group-text">
                            <FcApproval />
                          </span>
                        </div>
                      </div>
                      <span className="form-text text-muted">
                        Por favor ingresar estado
                      </span>
                    </div>
                  </div>
                </form>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <button className="btn btn-light-primary font-weight-bold">
                  Manage
                </button>
                <button className="btn btn-outline-secondary font-weight-bold">
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

export default AgregarReunion;
