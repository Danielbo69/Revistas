import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import db from '../firebase/config';

const SignUp = ({ history }) => {

    const handleSignUp = useCallback(async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        console.log(event)
        try {
            await db.auth().createUserWithEmailAndPassword(email.value, password.value);
            history.push("/Home");

        } catch (error) {
            alert(error);
        }
    }, [history])
    return (
        <div>
            <form onSubmit={handleSignUp}>
                <header className="nav animated fadeInDown" align="center">
                    {/* <img id="ima" src="./home/style/assets/favicon.png" width="55px" alt="Logo">                   */}
                </header>

                <div className="container">
                    <h2 id="p-title" className="animated fadeInDown"> Panel de Control </h2>

                    <div id="p-ses" className="animated fadeInDown">
                        <div id="ses">
                            <input name="email" className="inpt" placeholder="Correo" type="email" id="usr" />
                            <input name="password" className="inpt" placeholder="Contraseña" type="password" id="pass" />
                            <span id="reqOutput"></span>
                            <button type="submit" className="bton">Registrarse</button>
                        </div>
                    </div>

                </div>
            </form>

            <footer className="footer" align="center" >
                <div className="container" align="center">
                    <p className="text-muted" id="textmuted"> &copy; 2020 Magazine Group. Todos los derechos reservados. </p>
                </div>
            </footer>
        </div>
    )
}

export default withRouter(SignUp);