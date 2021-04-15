export const getUser = (id) => {
  const url = `https://6077bc761ed0ae0017d6b3ac.mockapi.io/users/${id}`;
  const resp = fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      return data;
    });
  return resp;
};
