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
                    <p className="title">Desarrollador</p>
                    <p className="subtitle">Fullstack MERN</p>  <p>Soy un desarrollador web y un apasionado de la tecnología.
                        Me encanta aprender nuevas tecnologías y me gusta trabajar en equipo.
                        Me encanta la tecnología y la programación.</p>
                </div>

            </div>

        </>
    )
}
