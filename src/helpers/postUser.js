export const postUser = ( id, name, lastName, email, phone, city, country ) => {
  
  const data = {
    id: id,
    name: name,
    lastName: lastName,
    email: email,
    phone: phone,
    city: city,
    country: country,
  };

  const url = "https://6077bc761ed0ae0017d6b3ac.mockapi.io/users";
  const resp = fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log('POST',data);
      return data;
    });
  return resp;
};
