import { getUser } from "../helpers/getUser";
import { postUser } from "../helpers/postUser";
import { types } from "../types/types";

export const startAuth = (id, name, lastName, email, phone, city, country) => {
  return (dispatch) => {
    postUser();
    dispatch(login(id, name, lastName, email, phone, city, country, true));
  };
};

export const startLogin =  (id) => {
  return async (dispatch) => {
    await getUser(id).then(resp => console.log(resp));
  }
};

export const login = (id, name, lastName, email, phone, city, country, logged) => ({
  type: types.login,
  payload: {
    id,
    name,
    lastName,
    email,
    phone,
    city,
    country,
    logged,
  },
});

export const logout = () => ({
  type: types.logout,
  payload: { logged: false },
});
