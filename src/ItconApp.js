import React from "react";
import { Provider } from "react-redux";
import { AppRouter } from "../src/routers/AppRouter";
import { store } from "./store/store";

export const ItconApp = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
