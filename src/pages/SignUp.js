import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import db from '../firebase/config';
import NavbarUp from '../comps/NavbarUp'

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
            <NavbarUp />
            <form onSubmit={handleSignUp}>

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
        </div>
    )
}

export default withRouter(SignUp);