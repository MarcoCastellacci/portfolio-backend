import React from 'react'

export default function ContactForm() {



    return (
        <>
            <div className="home-container">
                <form action="https://formsubmit.co/848ee880af437792600702bc576c1438" method='POST' className="contact-form">
                    <div className="textInputWrapper input-text">
                        <input placeholder="Full Name" name='Full Name' type="text" className="textInput" />
                    </div>
                    <div className="textInputWrapper input-mail">
                        <input placeholder="Your Mail" name='Mail' type="mail" className="textInput" />
                    </div>
                    <div className="textInputWrapper input-tel">
                        <input placeholder="Your Phone Number" name='Tel' type="tel" className="textInput" />
                    </div>
                    <div className="textInputWrapper textarea-input">
                        <textarea name="Msj" placeholder='Leave me a message' className='textarea-msj' rows="5" cols="150"></textarea>
                    </div>
                    <input type="submit" value="Send" className="submitButton" />

                    <input type="hidden" name="_next" value="http://localhost:3000/"/>
                    <input type="hidden" name="_captcha" value="false"/>
                    <input type="hidden" name="_template" value="box"/>
                </form>
            </div>
        </>
    )
}
