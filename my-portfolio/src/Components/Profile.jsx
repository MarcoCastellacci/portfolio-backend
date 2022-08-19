import React from "react";
import '../Styles/profile.css'
import Yo from '../Assets/Perfil.jpg'

export default function Profile() {
    return (
        <>

            <div class="card-profile">
                <div class="card-profile-img">
                    <img src={Yo} alt="Marco Castellacci" />
                </div>
                <div class="card-info">
                    <p class="title">Desarrollador</p>
                    <p class="subtitle">Fullstack MERN</p>  <p>Soy un desarrollador web y un apasionado de la tecnología.
                        Me encanta aprender nuevas tecnologías y me gusta trabajar en equipo.
                        Me encanta la tecnología y la programación.</p>
                </div>

            </div>

        </>
    )
}
