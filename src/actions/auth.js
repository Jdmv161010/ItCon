// //import { useFetchUser } from "../hooks/useFetchUser";
import { getUser } from "../helpers/getUser";
import { postUser } from "../helpers/postUser";
import { types } from "../types/types";

export const startAuth = (id, name, lastName, email, phone, city, country) => {
  return (dispatch) => {
    postUser();
    dispatch(login(id, name, lastName, email, phone, city, country));
  };
};

export const displayUser = (id) => {
  getUser();
}

export const login = (id, name, lastName, email, phone, city, country) => ({
  type: types.login,
  payload: {
    id,
    name,
    lastName,
    email,
    phone,
    city,
    country,
  },
});

export const logout = () => ({
  type: types.logout,
});
