import React,{useState, useContext} from 'react'
import {ingresar} from "../services/authService";
import {AuthContext} from "../context/authContext";

export default function LoginView() {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  const {user, setAuthUser} = useContext(AuthContext);

  const loguear = (e) => {
    e.preventDefault();
    ingresar(correo, password)
    .then(rpta => {
      setAuthUser(rpta.uid);
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="d-flex justify-content-center">
      <div style={{width:'400px'}}>
        <div className="card mt-3">
          <div className="card-body">
            <h2 className="card-title">
              Login
            </h2>
            <form onSubmit={(e)=>{loguear(e)}}>
              <div className="form-group">
                <label>Correo:</label>
                <input
                  type="email"
                  className="form-control"
                  value={correo}
                  onChange={(e) => {
                    setCorreo(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
