import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

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

    const peticion = await fetch(`http://localhost:3000/user/add`, options);
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
