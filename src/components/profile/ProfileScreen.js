import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, startLogin } from "../../actions/auth";
import "../styles.scss";

export const ProfileScreen = () => {
  const dispatch = useDispatch();

  const { id, name, lastName, email, phone, city, country } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    const usr = async () => {
      await dispatch(startLogin(id));
    };
    usr();
  }, [dispatch, id]);

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <div className="container-fluid">
      <div className="login-form">
        <div className="title">
          <h1>Hola {name}!!</h1>
        </div>

        <div className="body">
          <div className="form-group profile">
            <div>
              <i className="fas fa-user" />
              <label>ID: </label>
            </div>
            <h6>{id}</h6>
          </div>
          <div className="form-group profile">
            <div>
              <i className="fas fa-user" />
              <label>Nombres: </label>
            </div>
            <h6>{name}</h6>
          </div>
          <div className="form-group profile">
            <div>
              <i className="fas fa-user" />
              <label>Apellidos: </label>
            </div>
            <h6>{lastName}</h6>
          </div>
          <div className="form-group profile">
            <div>
              <i className="fas fa-envelope" />
              <label>Email: </label>
            </div>
            <h6>{email}</h6>
          </div>
          <div className="form-group profile">
            <div>
              <i className="fas fa-phone" />
              <label>Teléfono: </label>
            </div>
            <h6>{phone}</h6>
          </div>
          <div className="form-group profile">
            <div>
              <i className="fas fa-building" />
              <label>Ciudad: </label>
            </div>
            <h6>{city}</h6>
          </div>
          <div className="form-group profile">
            <div>
              <i className="fas fa-globe-americas" />
              <label>País: </label>
            </div>
            <h6>{country}</h6>
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleLogOut}
        >
          Salir
        </button>
      </div>
    </div>
  );
};
