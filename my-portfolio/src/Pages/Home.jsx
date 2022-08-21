import React from 'react';
import { useSelector } from 'react-redux';
import Knoleges from '../Components/Knoleges';
import Profile from '../Components/Profile';

// import '../Styles/styles.css'

export default function Home() {

const tecnologies = useSelector(store => store.tecnoReducer.tecnologies);

// console.log(tecnologies)

    return (
        <>
            <div className="bg-container">
                <div className="home-container">
                    <Profile />
                    <Knoleges tecno={tecnologies}/>
                </div>
            </div>
        </>
    )
}