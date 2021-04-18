import React from "react";
import "./style.scss";
import "../styles.scss";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { startAuth } from "../../actions/auth";

export const AuthScreen = () => {
  const dispatch = useDispatch();

  const [values, handelInputChange] = useForm({
    id: "",
    name: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    country: "",
  });

  const { id, name, lastName, email, phone, city, country } = values;

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(startAuth(id, name, lastName, email, phone, city, country));
  };

  return (
    <div className="container-fluid">
      <div className="login-form">
        <form onSubmit={handleRegister}>
          <div className="form-group">
            <label>ID</label>
            <input
              type="number"
              className="form-control"
              autoComplete="off"
              name="id"
              value={id}
              onChange={handelInputChange}
            />
          </div>
          <div className="form-group">
            <label>Nombres</label>
            <input
              type="text"
              className="form-control"
              autoComplete="off"
              name="name"
              value={name}
              onChange={handelInputChange}
            />
          </div>
          <div className="form-group">
            <label>Apellidos</label>
            <input
              type="text"
              className="form-control"
              autoComplete="off"
              name="lastName"
              value={lastName}
              onChange={handelInputChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              autoComplete="off"
              name="email"
              value={email}
              onChange={handelInputChange}
            />
          </div>
          <div className="form-group">
            <label>Teléfono</label>
            <input
              type="number"
              className="form-control"
              autoComplete="off"
              name="phone"
              value={phone}
              onChange={handelInputChange}
            />
          </div>
          <div className="form-group">
            <label>Ciudad</label>
            <input
              type="text"
              className="form-control"
              autoComplete="off"
              name="city"
              value={city}
              onChange={handelInputChange}
            />
          </div>
          <div className="form-group">
            <label>País</label>
            <input
              type="text"
              className="form-control"
              autoComplete="off"
              name="country"
              value={country}
              onChange={handelInputChange}
            />
          </div>
          <div className="form-group buttons">
            <button type="submit" className="btn btn-primary">
              Registrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
