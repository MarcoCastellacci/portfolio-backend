import React, { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse
} from 'mdb-react-ui-kit';
import Logo from '../Assets/marco.png'
import '../Styles/styles.css'

export default function NavBar() {
    const [showNavColorSecond, setShowNavColorSecond] = useState(false);
    return (
        <>
            <MDBNavbar expand='lg' dark bgColor='dark'>
                <MDBContainer fluid>
                    <img
                        src={Logo}
                        height='80'
                        alt=''
                        loading='lazy'
                    />
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
                                <MDBNavbarLink aria-current='page' href='#'>
                                    My pages
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}