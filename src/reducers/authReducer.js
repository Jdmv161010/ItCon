import { types } from "../types/types";

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return { 
        id: action.payload.id,
        name: action.payload.name,
        lastName: action.payload.lastName,
        email: action.payload.email,
        phone: action.payload.phone,
        city: action.payload.city,
        country: action.payload.country,
        logged: action.payload.logged,
      };
    case types.logout:
      return {};

    default:
      return state;
  }
};
