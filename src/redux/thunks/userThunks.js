const urlback = import.meta.env.URL_BACK;

export const AddUser = async (user) => {
  try {
    const options = {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        pass: user.pass,
      }),
    };

    const peticion = await fetch(`${urlback}/user/add`, options);
       console.log("url", urlback)
    let result = "";
    if (peticion.ok) {
      const newUser = await peticion.json();
      result = {
        mensaje: `${newUser.email} registrada con exito`,
        peticion: "success",
      };
    } else {
      result = {
        mensaje: `${user.email} ya esta registrada`,
        peticion: "error",
      };
    }
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (user) => {
  try {
    const options = {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      credentials: "include",
      body: JSON.stringify({
        email: user.email,
        pass: user.pass,
      }),
    };

    const peticion = await fetch(`https://servicetmdb.onrender.com/user/login`, options);

    let response = {};

    if (peticion.ok) {
      const data = await peticion.json();
      response = {
        name: data.name,
        email: data.email,
        mensaje: `${data.name} is logged`,
        peticion: "success",
      };
    } else {
      response = {
        name: "",
        email: "",
        mensaje: `invalid data`,
        peticion: "error",
      };
    }
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  try {
    const options = {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      credentials: "include",
    };

    await fetch(`${urlback}/user/logout`, options);
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (email) => {
  try {
    const options = {
      method: "GET",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      credentials: "include",
    };

    const peticion = await fetch(`${urlback}/user/${email}`, options);
    const data = await peticion.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
