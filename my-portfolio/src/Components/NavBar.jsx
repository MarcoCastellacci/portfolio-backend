import React, { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse
} from 'mdb-react-ui-kit';
import { Link as LinkRouter } from 'react-router-dom';
import Logo from '../Assets/marco.png'
import '../Styles/styles.css'

export default function NavBar() {
    const [showNavColorSecond, setShowNavColorSecond] = useState(false);
    const pages = [
        {
            name: 'Home',
            to: '/home'
        },
        {
            name: 'My pages',
            to: '/proyects'
        },
        {
            name: 'Skills',
            to: '/knoleges'
        },
        {
            name: 'Contact',
            to: '/contact'
        }

    ] 

    return (
        <>
            <MDBNavbar expand='lg' dark bgColor='dark'>
                <MDBContainer fluid>
                    <LinkRouter to="/">
                        <img
                            src={Logo}
                            height='80'
                            alt=''
                            loading='lazy'
                        />
                    </LinkRouter>
                    <MDBNavbarBrand className='nombre-navbar'>Marco Castellacci</MDBNavbarBrand>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarColor02'
                        aria-controls='navbarColor02'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavColorSecond(!showNavColorSecond)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse show={showNavColorSecond} navbar id='navbarColor02'>
                        <MDBNavbarNav className='.justify-content-center mb-2 mb-lg-0'>
                            <MDBNavbarItem className='active'>
                        {pages.map((page, index) => (
                                <LinkRouter key={index} className='link' to={page.to}>
                                    {page.name}
                                </LinkRouter>))}
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}