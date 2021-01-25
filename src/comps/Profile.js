import React from 'react';
import NavbarUp from '../comps/NavbarUp'

let data = localStorage.getItem("email")

const Profile = () => {
return (
<div>
    <NavbarUp />
    <h4 className="titlePro">Profile</h4>
    <div className='ContentPro row' style={{justifyContent: 'center', alignItems: 'center'}} >
        <div className="contentpages row">
            <div className="col-md-6 imagePro">
                <img src="https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} 
                />
            </div>
            <div className="col-md-6 infoPro">
                <div className="col-sm-12">
                    <label>Name: admin</label>
                </div>
                <div className="col-sm-12">
                    <label>Email: {data}</label>
                </div>
            </div>
        </div>
    </div>
</div>
)
}

export default Profile;