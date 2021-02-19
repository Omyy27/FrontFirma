import React, { useState, useEffect } from "react";

import PropTypes, { DOMElement } from "prop-types";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Fade,
} from "reactstrap";
import {
  FcAddressBook,
  FcApproval,
  FcAutomatic,
  FcCalendar,
  FcCollaboration,
  FcCustomerSupport,
  FcFile,
  FcFinePrint,
  FcFolder,
  FcFullTrash,
  FcGlobe,
  FcInfo,
} from "react-icons/fc";


const TablaReuniones = (props) => {
  const dataParticipantes = [
    {
      id: 1,
      date: "10/02/2021",
      place: "Barranquilla",
      project: "Firmas",
      moderator: "Pedro",
      description: "Reunión para iniciar",
      guests: "juan@correo.com",
      link: 30099999,
      state: "Activo",
    },
  ];

  //INICIANDO ESTADO PARA USAR MODALES
  const [modalVer, setModalVer] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);

  const toggle3 = () => setModalVer(!modalVer);
  const toggle = () => setModalEditar(!modalEditar);
  const toggle2 = () => setModalEliminar(!modalEliminar);

  //CAPTURANDO DATA
  const [info, setInfo] = useState(dataParticipantes);

  useEffect(() => {
    function list() {
      fetch("http://localhost:8000/api/lits/meeting") //Cambiar a ruta del servidor.
        .then((response) => response.json())
        .then((data) => {
          setInfo(data.data);
        });
    }
    list();
  }, []);

  //SELECCIONANDO ITEM PARA EDITAR
  const [reunionSeleccionada, setReunionSeleccionada] = useState({
    id: 1,
    date: "",
    place: "",
    project: "",
    moderator: "",
    description: "",
    guests: "",
    link: "",
    state: "",
  });

  const seleccionarReunion = (elemento, caso) => {
    setReunionSeleccionada(elemento);
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
    setReunionSeleccionada((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  {/*const ver = () => {
    var dataVer = info;
    dataVer.map((reunion) => {
      if (reunion.id === reunionSeleccionada.id) {
        reunion.date = reunionSeleccionada.date;
        reunion.project = reunionSeleccionada.project;
        reunion.moderator = reunionSeleccionada.moderator;
        reunion.description = reunionSeleccionada.description;
        reunion.place = reunionSeleccionada.place;
        reunion.guests = reunionSeleccionada.guests;
        reunion.link = reunionSeleccionada.link;
        reunion.state = reunionSeleccionada.state;
      }
    });
    setInfo(dataVer);
    setModalVer(false);
  }; */}

  const editar = () => {
    var dataNueva = info;
    dataNueva.map((reunion) => {
      if (reunion.id === reunionSeleccionada.id) {
        reunion.date = reunionSeleccionada.date;
        reunion.project = reunionSeleccionada.project;
        reunion.moderator = reunionSeleccionada.moderator;
        reunion.description = reunionSeleccionada.description;
        reunion.place = reunionSeleccionada.place;
        reunion.guests = reunionSeleccionada.guests;
        reunion.link = reunionSeleccionada.link;
        reunion.state = reunionSeleccionada.state;
      }
    });
    setInfo(dataNueva);
    setModalEditar(false);
  };

  const eliminar = () => {
    setInfo(info.filter((reunion) => reunion.id !== reunionSeleccionada.id));
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
      <table className="table table-hover">
        <thead className="thead-light">
          <tr>
            <th scope="col">Fecha</th>
            <th scope="col">Lugar</th>
            <th scope="col">Proyecto</th>
            <th scope="col">Moderador</th>
            {/*<th scope="col">Descripción</th> */}
            {/*<th scope="col">Participantes</th> */}
            {/*<th scope="col">Link/Plataforma</th> */}
            <th scope="col">Estado</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {/*RECORRIENDO ELEMENTOS PARA LLENAR TABLA*/}
          {info.map((item) => (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.place}</td>
              <td>{item.project}</td>
              <td>{item.moderator}</td>
              {/*<td>{item.description}</td>
              <td>{item.guests}</td> 
              <td>{item.link}</td>*/}
              <td>
                <span className="label label-inline label-light-primary font-weight-bold">
                  {item.state}
                </span>
              </td>
              <td>
                <Button
                  className="btn btn-icon btn-light-warning font-weight-bold mr-2"
                  data-toggle="tooltip"
                  title="Ver"
                  onClick={(toggle3, () => seleccionarReunion(item, "Ver"))}
                >
                  <FcFinePrint />
                </Button>
                <Button
                  className="btn btn-icon btn-light-success font-weight-bold mr-2"
                  data-toggle="tooltip"
                  title="Editar"
                  onClick={(toggle, () => seleccionarReunion(item, "Editar"))}
                >
                  <FcAutomatic />
                </Button>
                {"   "}
                <Button
                  className="btn btn-icon btn-light-danger font-weight-bold mr-2"
                  data-toggle="tooltip"
                  title="Eliminar"
                  onClick={
                    (toggle2, () => seleccionarReunion(item, "Eliminar"))
                  }
                >
                  <FcFullTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div class="my_datatable" id="kt_datatable"></div>
      {/*MODAL PARA EDITAR*/}
      <Modal isOpen={modalEditar} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Editar</ModalHeader>
        <ModalBody>
          <form className="form was-validated" autoComplete="off">
            <div className="card-body">
              <div className="form-group row">
                
                <div className="col-lg-6">
                  <label>ID:</label>
                  <div className="input-group">
                    <input
                      className="form-control form-control-solid"
                      readOnly
                      type="text"
                      name="id"
                      value={reunionSeleccionada && reunionSeleccionada.id}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <FcInfo />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <label>Fecha:</label>
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="datetime-local"
                      name="date"
                      value={reunionSeleccionada && reunionSeleccionada.date}
                      onChange={handleChange}
                      required
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <FcCalendar />
                      </span>
                    </div>
                  </div>
                  <span className="form-text text-muted">
                    Please enter your postcode
                  </span>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-lg-6">
                  <label>Lugar:</label>
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="text"
                      name="place"
                      value={reunionSeleccionada && reunionSeleccionada.place}
                      onChange={handleChange}
                      required
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <FcGlobe />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <label>Proyecto:</label>
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="text"
                      name="project"
                      value={reunionSeleccionada && reunionSeleccionada.project}
                      onChange={handleChange}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <FcFolder />
                      </span>
                    </div>
                  </div>
                  <span className="form-text text-muted">
                    Please enter your postcode
                  </span>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-lg-6">
                  <label>Moderador:</label>
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="text"
                      name="moderator"
                      value={
                        reunionSeleccionada && reunionSeleccionada.moderator
                      }
                      onChange={handleChange}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <FcCustomerSupport />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <label>Descripción:</label>
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="text"
                      name="description"
                      value={
                        reunionSeleccionada && reunionSeleccionada.description
                      }
                      onChange={handleChange}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <FcFile />
                      </span>
                    </div>
                  </div>
                  <span className="form-text text-muted">
                    Please enter your postcode
                  </span>
                </div>
              </div>
              


              <div className="form-group row">
                <div className="col-lg-6">
                  <label>Participantes:</label>
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="text"
                      name="guests"
                      value={reunionSeleccionada && reunionSeleccionada.guests}
                      onChange={handleChange}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <FcCollaboration />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <label>Plataforma:</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      type="url"
                      name="link"
                      value={reunionSeleccionada && reunionSeleccionada.link}
                      onChange={handleChange}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <FcAddressBook />
                      </span>
                    </div>
                  </div>
                  <span className="form-text text-muted">
                    Please enter your postcode
                  </span>
                </div>
              </div>

              <div className="form-group row">
                <div className="col-lg-12">
                  <label>Estado:</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      type="text"
                      name="state"
                      value={reunionSeleccionada && reunionSeleccionada.state}
                      onChange={handleChange}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">
                        <FcApproval />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={(toggle, () => editar())}>
            Guardar
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>

      {/*MODAL PARA ELIMINAR*/}
      <Modal
        isOpen={modalEliminar}
        toggle={toggle2}
        className={(className, "modal-dialog-centered")}
      >
        <ModalHeader toggle2={toggle2}>Editar</ModalHeader>
        <ModalBody>
          <h4 className="text-center">
            ¿Estás seguro que desea eliminar la reunión del proyecto{" "}
            {reunionSeleccionada && reunionSeleccionada.project}?
          </h4>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={(toggle2, () => eliminar())}>
            Si
          </Button>{" "}
          <Button color="secondary" onClick={toggle2}>
            No
          </Button>
        </ModalFooter>
      </Modal>

      {/*MODAL PARA VER*/}
      <Modal
        isOpen={modalVer}
        toggle={toggle3}
        className={(className, "modal-dialog-centered")}
      >
        <ModalHeader toggle3={toggle3}>
          {reunionSeleccionada && reunionSeleccionada.project}
        </ModalHeader>
        <ModalBody>
          <form className="form was-validated" autoComplete="off">
            <div className="card-body">
              {/*Titulo 1 */}
              <div class="row bg-success rounded  ">
                <div class="col-md-4 text-light text-center">
                  <span className="h5">ID</span>
                </div>
                <div class="col-md-4 text-light text-center">
                  <span className="h5">Fecha</span>
                </div>
                <div class="col-md-4 text-light text-center">
                  <span className="h5">Lugar</span>
                </div>
              </div>
              {/*INFO DETALLE1 */}
              <div className="row mt-2">
                <div className="col-md-4">
                  <p className="text-center">
                    {reunionSeleccionada && reunionSeleccionada.id}
                  </p>
                </div>
                <div className="col-md-4">
                  <p className="text-center">
                    {reunionSeleccionada && reunionSeleccionada.date}
                  </p>
                </div>
                <div className="col-md-4">
                  <p className="text-center">
                    {reunionSeleccionada && reunionSeleccionada.place}
                  </p>
                </div>
              </div>
              {/*Titulo 2 */}
              <div class="row bg-success rounded mt-4 ">
                <div class="col-md-6 text-light text-center">
                  <span className="h5">Proyecto</span>
                </div>
                <div class="col-md-6 text-light text-center">
                  <span className="h5">Moderador</span>
                </div>
              </div>
              {/*INFO DETALLE2 */}
              <div className="row mt-2">
                <div className="col-md-6">
                  <p className="text-center">
                    {reunionSeleccionada && reunionSeleccionada.project}
                  </p>
                </div>
                <div className="col-md-6">
                  <p className="text-center">
                    {reunionSeleccionada && reunionSeleccionada.moderator}
                  </p>
                </div>
              </div>
              {/*Titulo 3 */}
              <div class="row bg-success rounded mt-4 ">
                <div class="col-md text-light text-center">
                  <span className="h5">Descripción</span>
                </div>
              </div>
              {/*INFO DETALLE3 */}
              <div className="row mt-2">
                <div className="col-md">
                  <span>
                    <p className="text-center">
                      {reunionSeleccionada && reunionSeleccionada.description}
                    </p>
                  </span>
                </div>
              </div>
              {/*Titulo 4 */}
              <div class="row bg-success rounded mt-4 ">
                <div class="col-md-4 text-light text-center">
                  <span className="h5">Participantes</span>
                </div>
                <div class="col-md-4 text-light text-center">
                  <span className="h5">Plataforma/Link</span>
                </div>
                <div class="col-md-4 text-light text-center">
                  <span className="h5">Estado</span>
                </div>
              </div>
              {/*INFO DETALLE4 */}
              <div className="row mt-2">
                <div className="col-md-4">
                  <p className="text-center">
                    {reunionSeleccionada && reunionSeleccionada.guests}
                  </p>
                </div>
                <div className="col-md-4">
                  <p className="text-center">
                    {reunionSeleccionada && reunionSeleccionada.link}
                  </p>
                </div>
                <div className="col-md-4">
                  <p className="text-center">
                    {reunionSeleccionada && reunionSeleccionada.state}
                  </p>
                </div>
              </div>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle3}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default TablaReuniones;
