import React from "react";

export const Login = () => {
  const f = document.querySelectorAll(".form-login");

  const handleLogin = (e) => {
    e.preventDefault();
    f.reset();
  };

  return (
    <div className="container bg-warning vh-100">
      <form onSubmit={handleLogin} className="row">
        <div>
          <input type="text" name="email" placeholder="Ingrese su email" />
        </div>
        <div>
          <input
            type="text"
            name="password"
            placeholder="ingrese su password"
          />
        </div>
        <div>
          <button type="submit">Ingresar</button>
        </div>
      </form>
    </div>
  );
};
