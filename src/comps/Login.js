import React from 'react';

const Login = () => {
    return (
        <div>
            <header className="nav animated fadeInDown" align="center">
                {/* <img id="ima" src="./home/style/assets/favicon.png" width="55px" alt="Logo">                   */}
            </header>

            <div className="container">
                <h2 id="p-title" className="animated fadeInDown"> Panel de Control </h2>

                <div id="p-ses" className="animated fadeInDown">
                    <div id="ses">
                        <input className="inpt" placeholder="Usuario" type="text" id="usr"/>
                        <input className="inpt" placeholder="Contraseña" type="password" id="pass" />
                        <span id="reqOutput"></span>
                        <button className="bton">Entrar</button>
                    </div>
                </div>
            </div>

            <footer className="footer" align="center" >
                <div className="container" align="center">
                    <p className="text-muted" id="textmuted"> &copy; 2020 Magazine Group. Todos los derechos reservados. </p>
                </div>
            </footer>
        </div>
    )
}

export default Login;