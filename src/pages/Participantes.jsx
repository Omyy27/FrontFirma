import React, { useEffect, useState } from "react";
import { FaUserFriends } from "react-icons/fa";
import PropTypes, { DOMElement } from "prop-types";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Fade,
} from "reactstrap";
import { FcAutomatic, FcFinePrint, FcFullTrash } from "react-icons/fc";

const Participantes = (props) => {
  const dataParticipantes = [
    {
      id: 1,
      name: "Juan",
      last_name: "ElPropio",
      email: "juan@correo.com",
      phone: 30099999,
      state: "Activo",
    },
    {
      id: 2,
      name: "Juan",
      last_name: "ElPropio",
      email: "juan@correo.com",
      phone: 30099999,
      state: "Activo",
    },
  ];
  const [guests, setGuests] = useState(dataParticipantes);
  const [create, setCreate] = useState({
    record_id: 2,
    name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    function datos() {
      fetch("http://localhost:8000/api/list") //Cambiar a ruta del servidor.
        .then((response) => response.json())
        .then((data) => {
          setGuests(data.data);
        });
    }
    datos();
  }, []);

  function cambioInput(evento) {
    setCreate({
      ...create,
      [evento.target.name]: evento.target.value,
    });
  }

  const enviarDatos = (event) => {
    event.preventDefault();
    fetch("http://localhost:8000/api/guests", {
      method: "POST",
      body: JSON.stringify(create),
      headers: {
        "Content-Type": "aplication/json",
      },
    }).then((response) => response.json());
  };

  //INICIANDO ESTADO PARA USAR MODALES
  const [modalVer, setModalVer] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);

  const toggle3 = () => setModalVer(!modalVer);
  const toggle = () => setModalEditar(!modalEditar);
  const toggle2 = () => setModalEliminar(!modalEliminar);

  //SELECCIONANDO ITEM PARA EDITAR
  const [participanteSeleccionado, setParticipanteSeleccionado] = useState({
    id: "",
    name: "",
    last_name: "",
    email: "",
    phone: "",
    state: "",
  });

  const seleccionarParticipante = (item, caso) => {
    setParticipanteSeleccionado(item);
    if (caso === "Editar") {
      setModalEditar(true);
    } else if (caso === "Eliminar") {
      setModalEliminar(true);
    } else if (caso === "Ver") {
      setModalVer(true);
    }
  };

  //PERMITIR EDITAR
  const handleChange = (e) => {
    const { name, value } = e.target;
    setParticipanteSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const editar = () => {
    var dataNueva = guests;
    dataNueva.map((participante) => {
      if (participante.id === participanteSeleccionado.id) {
        participante.name = participanteSeleccionado.name;
        participante.last_name = participanteSeleccionado.last_name;
        participante.email = participanteSeleccionado.email;
        participante.phone = participanteSeleccionado.phone;
        participante.state = participanteSeleccionado.state;
      }
    });
    setParticipanteSeleccionado(dataNueva);
    setModalEditar(false);
  };

  const eliminar = () => {
    setGuests(
      guests.filter(
        (participante) => participante.id !== participanteSeleccionado.id
      )
    );
    setModalEliminar(false);
  };

  const { className } = props;

  //INICIO DE CONTROL DEL MODAL
  Modal.propTypes = {
    // boolean to control the state of the popover
    isOpen: PropTypes.bool,
    autoFocus: PropTypes.bool,
    // if modal should be centered vertically in viewport
    centered: PropTypes.bool,
    // corresponds to bootstrap's modal sizes, ie. 'lg' or 'sm'
    size: PropTypes.string,
    // callback for toggling isOpen in the controlling component
    toggle: PropTypes.func,
    toggl2: PropTypes.func,
    role: PropTypes.string, // defaults to "dialog"
    // used to reference the ID of the title element in the modal
    labelledBy: PropTypes.string,
    keyboard: PropTypes.bool,
    // control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
    backdrop: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(["static"]),
    ]),
    // if body of modal should be scrollable when content is long
    scrollable: PropTypes.bool,
    // allows for a node/component to exist next to the modal (outside of it). Useful for external close buttons
    external: PropTypes.node,
    // called on componentDidMount
    onEnter: PropTypes.func,
    // called on componentWillUnmount
    onExit: PropTypes.func,
    // called when done transitioning in
    onOpened: PropTypes.func,
    // called when done transitioning out
    onClosed: PropTypes.func,
    className: PropTypes.string,
    wrapClassName: PropTypes.string,
    modalClassName: PropTypes.string,
    backdropClassName: PropTypes.string,
    contentClassName: PropTypes.string,
    // boolean to control whether the fade transition occurs (default: true)
    fade: PropTypes.bool,
    cssModule: PropTypes.object,
    // zIndex defaults to 1000.
    zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    // backdropTransition - controls backdrop transition
    // timeout is 150ms by default to match bootstrap
    // see Fade for more details
    backdropTransition: PropTypes.shape(Fade.propTypes),
    // modalTransition - controls modal transition
    // timeout is 300ms by default to match bootstrap
    // see Fade for more details
    modalTransition: PropTypes.shape(Fade.propTypes),
    innerRef: PropTypes.object,
    // if modal should be destructed/removed from DOM after closing
    unmountOnClose: PropTypes.bool, // defaults to true
    // if the element which triggered the modal to open should focused after the modal closes (see example somewhere below)
    returnFocusAfterClose: PropTypes.bool, // defaults to true
    // container to append the modal to
    container: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      DOMElement,
    ]),
    trapFocus: PropTypes.bool, // Traps focus within modal
  };
  //FIN CONTROL DEL MODAL

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
            <div className="row">
              <div className="col-lg-8">
                <div className="card card-custom">
                  <div className="card-header">
                    <div className="card-title">
                      <span className="card-icon">
                        <FaUserFriends className="text-primary" />
                      </span>
                      <h3 className="card-label">Participantes</h3>
                    </div>
                    <div className="card-toolbar"></div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-striped table-hover">
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Estado</th>
                            <th scope="col">Acciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/*RECORRIENDO ELEMENTOS PARA LLENAR TABLA*/}
                          {guests.map((item) => (
                            <tr key={item.id}>
                              <td>{item.name}</td>
                              <td>{item.last_name}</td>
                              <td>
                                <span className="badge badge-success font-weight-bold align-self-center">
                                  {item.state}
                                </span>
                              </td>
                              <td>
                                <Button
                                  className="btn btn-icon btn-light-warning font-weight-bold mr-2"
                                  data-toggle="tooltip"
                                  title="Ver"
                                  onClick={
                                    (toggle3,
                                    () => seleccionarParticipante(item, "Ver"))
                                  }
                                >
                                  <FcFinePrint />
                                </Button>
                                <Button
                                  className="btn btn-icon btn-light-success font-weight-bold mr-2"
                                  data-toggle="tooltip"
                                  title="Editar"
                                  onClick={
                                    (toggle,
                                    () =>
                                      seleccionarParticipante(item, "Editar"))
                                  }
                                >
                                  <FcAutomatic />
                                </Button>
                                {"   "}
                                <Button
                                  className="btn btn-icon btn-light-danger font-weight-bold mr-2"
                                  data-toggle="tooltip"
                                  title="Eliminar"
                                  onClick={
                                    (toggle2,
                                    () =>
                                      seleccionarParticipante(item, "Eliminar"))
                                  }
                                >
                                  <FcFullTrash />
                                </Button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card">
                  <div className="card-header">
                    <div className="row mr-2 mb-3 pt-2">
                      <div className="col-md-9">
                        <h4>Agregar Participantes</h4>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <form onSubmit={enviarDatos} className="form">
                      <div className="form-group">
                        <div className="row">
                          <div className="col-md-6">
                            <label>Nombre</label>
                            <input
                              className="form-control form-control-solid"
                              name="name"
                              onChange={cambioInput}
                              placeholder="Ana"
                            ></input>
                          </div>
                          <div className="col-md-6">
                            <label>Apellido</label>
                            <input
                              className="form-control form-control-solid"
                              name="last_name"
                              onChange={cambioInput}
                              placeholder="Lois"
                            ></input>
                          </div>
                          <div className="col-md-6">
                            <label>Correo</label>
                            <input
                              className="form-control form-control-solid"
                              name="email"
                              onChange={cambioInput}
                              placeholder="example@gmail.com"
                            ></input>
                          </div>
                          <div className="col-md-6">
                            <label>Telefono</label>
                            <input
                              className="form-control form-control-solid"
                              name="phone"
                              onChange={cambioInput}
                              type="number"
                              placeholder="3145566454"
                            ></input>
                          </div>
                          <div className="col-md-12">
                            <label>Estado</label>
                            <input
                              className="form-control form-control-solid"
                              name="state"
                              onChange={cambioInput}
                              type="text"
                              placeholder="Activo - Inactivo"
                            ></input>
                          </div>
                          <div className="col-md-12 mt-5">
                            <button
                              className="btn btn-success btn btn-block font-weight-bold"
                              type="submit"
                            >
                              Guardar
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={modalEditar} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Editar</ModalHeader>
        <ModalBody>
          <form className="form">
            <div className="form-group">
              <label>ID</label>
              <input
                className="form-control form-control-solid"
                readOnly
                type="text"
                name="id"
                value={participanteSeleccionado && participanteSeleccionado.id}
              />
              <label>Nombres</label>
              <input
                className="form-control form-control-solid"
                type="text"
                name="name"
                value={
                  participanteSeleccionado && participanteSeleccionado.name
                }
                onChange={handleChange}
              />
              <label>Apellidos</label>
              <input
                className="form-control form-control-solid"
                type="text"
                name="last_name"
                value={
                  participanteSeleccionado && participanteSeleccionado.last_name
                }
                onChange={handleChange}
              />
              <label>Correo</label>
              <input
                className="form-control form-control-solid"
                type="text"
                name="email"
                value={
                  participanteSeleccionado && participanteSeleccionado.email
                }
                onChange={handleChange}
              />
              <label>Teléfono</label>
              <input
                className="form-control form-control-solid"
                type="number"
                name="phone"
                value={
                  participanteSeleccionado && participanteSeleccionado.phone
                }
                onChange={handleChange}
              />
              <label>Estado</label>
              <input
                className="form-control form-control-solid"
                type="text"
                name="state"
                value={
                  participanteSeleccionado && participanteSeleccionado.state
                }
                onChange={handleChange}
              />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button
            className="btn btn-sm btn-success font-weight-bold"
            onClick={(toggle, () => editar())}
          >
            Guardar
          </Button>{" "}
          <Button
            className="btn btn-sm btn-primary font-weight-bold"
            onClick={toggle}
          >
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>

      <Modal
        isOpen={modalEliminar}
        toggle={toggle2}
        className={(className, "modal-dialog-centered")}
      >
        <ModalHeader toggle2={toggle2}>Eliminar</ModalHeader>
        <ModalBody className={"text-center"}>
          <h5>
            ¿Estás seguro que desea eliminar a{" "}
            {participanteSeleccionado &&
              participanteSeleccionado.name +
                " " +
                participanteSeleccionado.last_name}
            ?
          </h5>
        </ModalBody>
        <ModalFooter>
          <Button
            className="btn btn-sm btn-danger font-weight-bold"
            onClick={(toggle2, () => eliminar())}
          >
            Si
          </Button>{" "}
          <Button
            className="btn btn-sm btn-primary font-weight-bold"
            onClick={toggle2}
          ></Button>
        </ModalFooter>
      </Modal>

      <Modal
        isOpen={modalVer}
        toggle={toggle3}
        className={(className, "modal-dialog-centered")}
      >
        <ModalHeader toggle3={toggle3}>Ver</ModalHeader>
        <ModalBody>
          <form className="form was-validated" autoComplete="off">
            <div className="card-body">
              {/*Titulo 1 */}
              <div class="row bg-success rounded  ">
                <div class="col-md-6 text-light text-center">
                  <span className="h5">Nombre</span>
                </div>
                <div class="col-md-6 text-light text-center">
                  <span className="h5">Apellido</span>
                </div>
              </div>
              {/*INFO DETALLE1 */}
              <div className="row mt-2">
                <div className="col-md-6">
                  <p className="text-center">
                    {participanteSeleccionado && participanteSeleccionado.name}
                  </p>
                </div>
                <div className="col-md-6">
                  <p className="text-center">
                    {participanteSeleccionado &&
                      participanteSeleccionado.last_name}
                  </p>
                </div>
              </div>
              {/*Titulo 2 */}
              <div class="row bg-success rounded mt-4 ">
                <div class="col-md-4 text-light text-center">
                  <span className="h5">Correo</span>
                </div>
                <div class="col-md-4 text-light text-center">
                  <span className="h5">Telefono</span>
                </div>
                <div class="col-md-4 text-light text-center">
                  <span className="h5">Estado</span>
                </div>
              </div>
              {/*INFO DETALLE2 */}
              <div className="row mt-2">
                <div className="col-md-4">
                  <p className="text-center">
                    {participanteSeleccionado && participanteSeleccionado.email}
                  </p>
                </div>
                <div className="col-md-4">
                  <p className="text-center">
                    {participanteSeleccionado && participanteSeleccionado.phone}
                  </p>
                </div>
                <div className="col-md-4">
                  <p className="text-center">
                    {participanteSeleccionado && participanteSeleccionado.state}
                  </p>
                </div>
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button
            className="btn btn-sm btn-primary font-weight-bold"
            onClick={toggle3}
          >
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default Participantes;
