import React from 'react';
import './Footer.css'
import logo from '../../assets/images/logo.png'
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="newsletter d-flex justify-content-between align-items-center p-5">
                    <h2>Looking for a<br />
                        Software Partner?</h2>
                    <button className='btn newsletter-btn py-3'>Start A Project</button>
                </div>
                <div className="footer-content mt-5">
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={logo} alt="" />
                            <p className={'footer-about'}>Get a fully stacked design team that will<br /> give you
                                accessible design, exhaustive<br /> research, and an outstanding experience.</p>
                            <p>Email: info@softcent.eu</p>
                            <p>Phone: +(372) 57836500</p>
                            <div className='icons-container'>
                                <div className='icon-item facebook'>
                                    <FaFacebookF />
                                </div>
                                <div className='icon-item whatsapp'>
                                    <FaWhatsapp />
                                </div>
                                <div className='icon-item twitter'>
                                    <FaTwitter />
                                </div>
                                <div className='icon-item instagram'>
                                    <FaInstagram />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">

                                <div className="col-lg-4">
                                    <h4 className='pb-2'>Company</h4>
                                    <p>Our portfolio</p>
                                    <p>Our Product</p>
                                    <p>Our Team</p>
                                    <p>Our Pricing</p>
                                    <p>Testimonials</p>
                                    <p>Contact Us</p>
                                </div>
                                <div className="col-lg-4">
                                    <h4 className='pb-2'>Our Service</h4>
                                    <p>Marketing</p>
                                    <p>UI/UX Design</p>
                                    <p>Graphic Design (Branding)</p>
                                    <p>Development</p>
                                    <p>New Products</p>
                                </div>
                                <div className="col-lg-4">
                                    <h4 className='pb-2'>Supports</h4>
                                    <p>FAQs</p>
                                    <p>Support Policy</p>
                                    <p>Privacy Policy</p>
                                    <p>Trams of Service</p>
                                    <p>Refund Policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <p className='text-center pt-3'>© 2022, Softcent EU, A European IT company</p>
            </div>
        </div>
    );
};

export default Footer;