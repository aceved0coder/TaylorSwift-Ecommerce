import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/footer.jpg'
import { FiMapPin, FiPhone, FiMail, FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

export const Footer = () => {
  return (
    <>
        <div className='w-full p-5 bg-[pink] mt-5'>
            <div className='container mx-auto justify-between flex-wrap md:flex-nowrap flex gap-8'>
                <div>
                    <p className='uppercase font-bold '>Shop</p>
                    <ul className='mt-2'>
                        <li>
                            <Link to="/products" className='nav-item'>All products</Link>
                        </li>
                        <li>
                            <Link to="/products/Jersey" className='nav-item'>Accesories</Link>
                        </li>
                        <li>
                            <Link to="/products/Short" className='nav-item'>Vinyls</Link>
                        </li>

                    </ul>
                </div>
                <div>
                    <p className='uppercase font-bold '>Info</p>
                    <ul className='mt-2'>
                        <li>
                            <Link to="/help" className='nav-item'>Help</Link>
                        </li>
                        <li>
                            <Link to="/privacy-policy" className='nav-item'>Privacy policy</Link>
                        </li>
                        <li>
                            <Link to="/terms-and-conditions" className='nav-item'>Terms & conditions</Link>
                        </li>
                        <li>
                            <Link to="/about" className='nav-item'>About</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className='uppercase font-bold '>User</p>
                    <ul className='mt-2'>
                        <li>
                            <Link to="/account" className='nav-item'>Account</Link>
                        </li>
                        <li>
                            <Link to="/cart" className='nav-item'>Cart</Link>
                        </li>
                        <li>
                            <a href="http://localhost:9090/chat" className='nav-item'>Chat</a>
                        </li>
                        <li>
                            <a href="http://localhost:9090/realtimeproducts" className='nav-item'>Real time products</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <Link to="/">
                        <img src={logo} alt="Logo image" className='w-72' />
                    </Link>
                    <div className='flex gap-2 mt-4'>
                        <FiMapPin className='text-2xl text-black'/>
                        <p>18 de Julio, Montevideo, Uruguay</p>
                    </div>
                    <div className='flex gap-2 mt-4'>
                        <FiPhone className='text-2xl text-black'/>
                        <p>Call us at (598) 3214-3214</p>
                    </div>
                    <div className='flex gap-2 mt-4'>
                        <FiMail className='text-2xl text-black'/>
                        <p>taylorswift@uruguay.com</p>
                    </div>
                    <div className='text-2xl text-myDarkColor flex justify-center gap-8 mt-5 cursor-pointer'>
                        <FiFacebook className='hover:fill-myLightGreen hover:text-myDarkBlue transition-all' />
                        <FiInstagram className='hover:fill-myLightGreen hover:text-myDarkBlue transition-all' />
                        <FiTwitter className='hover:fill-myLightGreen hover:text-myDarkBlue transition-all' />
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-[white] py-2'>
            <div className='container mx-auto flex-col md:flex-row gap-3 flex justify-between items-center'>
                <p><span className='mr-1'>&copy;</span>2023 All Rights Reserved</p>
                <p>Software developed by <a className='text-Blue hover:text-pink-500' target='__blank' href="https://github.com/aceved0coder">Natalia Acevedo</a></p>
            </div>
        </div>
    </>
  )
}