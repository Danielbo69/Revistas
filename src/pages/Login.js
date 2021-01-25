import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router-dom";
import db from "../firebase/config";
import { AuthContext } from '../comps/Auth';

const Login = ({ history }) => {
    const handleLogin = useCallback(
        async (event) => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            const User = {
                email: email.value,
                pass: password.value
            }
            // console.log(User)
            try {
                await db.auth().signInWithEmailAndPassword(User.email, User.pass);
                history.push("/loged");
                localStorage.setItem("email", User.email)
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );
    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/loged" />
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <header className="nav animated fadeInDown" style={{ textAlign: 'center' }}>
                    <label style={{ width: '100%' }}>
                        Solo funcionarios del Centro Experimental de Estudios Latinoamericanos
                        pueden ingresar mediante este login
                    </label>
                    {/* <img id="ima" src="./home/style/assets/favicon.png" width="55px" alt="Logo">                   */}
                </header>

                <div className="container">
                    <h2 id="p-title" className="animated fadeInDown">
                        {" "}
          Panel de Control{" "}
                    </h2>

                    <div id="p-ses" className="animated fadeInDown">
                        <div id="ses">
                            <input name="email" className="inpt" placeholder="Correo" type="email" id="usr" />
                            <input name="password"
                                className="inpt"
                                placeholder="Contraseña"
                                type="password"
                                id="pass"
                            />
                            <span id="reqOutput"></span>
                            <button type="submit" className="bton">
                                Entrar
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default withRouter(Login);
