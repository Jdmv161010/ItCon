import { useEffect, useState } from "react";
import { getUser } from "../helpers/getUser";

export const useFetchUser = (id) => {
  const [state, setState] = useState({
    users: [],
  });

  useEffect(() => {
    getUser(id).then((user) => {
      setState(user);
    });
  }, [id]);

  return state;
};

