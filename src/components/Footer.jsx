import React from "react";
import Container from "./Container";

const Footer = () => {

    const LinkInfoStyles = {
        display: 'flex',
        paddingTop: '16px',
        justifyContent: 'space-between',
    };

    const LogoStyles = {
        width: '132px',
        height: '132px',
    };

    return(
        <div>
            <Container>
                <footer className="footer">
                    <div className="main__info">
                        <a href="index.html"><img src="img/logo.svg" alt="" className="logo" style={LogoStyles}/></a>
                        <div className="main__info-inner">
                            <img src="img/mail.svg" alt="" className="mail"/>
                            <h3 className="mail__text">fastfood_usa@gmail.com</h3>
                        </div>
                        <div className="main__info-inner">
                            <img src="img/internet.svg" alt="" className="mail"/>
                            <h3 className="mail__text">www.fastfood_usa.com</h3>
                        </div>
                    </div>
                    <div className="main__info">
                        <div className="link__info-inner">
                            <h1 className="footer__top-text">Our menu</h1>
                            <a className="link__info" href="/#"><h3 className="footer__bottom-text">Breakfast</h3></a>
                            <a className="link__info" href="/#"><h3 className="footer__bottom-text">Lunce</h3></a>
                            <a className="link__info" href="/#"><h3 className="footer__bottom-text">Dinner</h3></a>
                        </div>
                    </div>
                    <div className="main__info">
                        <div className="link__info-inner">
                            <h1 className="footer__top-text">Information</h1>
                            <a className="link__info" href="/#"><h3 className="footer__bottom-text">About us</h3></a>
                            <a className="link__info" href="/#"><h3 className="footer__bottom-text">Testimonial</h3></a>
                            <a className="link__info" href="/#"><h3 className="footer__bottom-text">Event</h3></a>
                        </div>
                    </div>
                    <div className="main__info">
                        <div className="link__info-inner">
                            <h1 className="footer__top-text">Useful Links</h1>
                            <a className="link__info" href="/#"><h3 className="footer__bottom-text">Services</h3></a>
                            <a className="link__info" href="/#"><h3 className="footer__bottom-text">Support</h3></a>
                            <a className="link__info" href="/#"><h3 className="footer__bottom-text">Conditions</h3></a>
                        </div>
                    </div>
                    <div className="main__info">
                        <h1 className="footer__top-text" style={{paddingTop: '55px'}}>Social Handles</h1>
                        <div className="link__info-inner" style={LinkInfoStyles}>
                            <a className="link__info" href="/#"><img src="img/facebook 1.svg" alt="" className="link__social"/></a>
                            <a className="link__info" href="/#"><img src="img/twitter 1.svg" alt="" className="link__social"/></a>
                            <a className="link__info" href="/#"><img src="img/instagram 1.svg" alt="" className="link__social"/></a>
                            <a className="link__info" href="/#"><img src="img/linkedin 1.svg" alt="" className="link__social"/></a>
                        </div>
                    </div>
                </footer>
            </Container>
        </div>
    );
}

export default Footer;