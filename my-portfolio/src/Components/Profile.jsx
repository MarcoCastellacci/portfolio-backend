import React from "react";
import '../Styles/profile.css'
import Yo from '../Assets/Perfil.jpg'

export default function Profile() {
    return (
        <>

            <div className="card-profile">
                <div className="card-profile-img">
                    <img src={Yo} alt="Marco Castellacci" />
                </div>
                <div className="card-info">
                    <p className="title">Developer</p>
                    <p className="subtitle">Fullstack MERN</p>  <p>I am a web developer and passionate about technology.
                        Enthusiastic about learning new technologies and I like to work in a team.
                        Technology and programming have become my passion.</p>
                </div>

            </div>

        </>
    )
}
