import './Nav.css'

import {Link, NavLink} from 'react-router-dom'
import {navLinks, navRight} from "../../data/data";

import {VscMenu} from "react-icons/vsc";
import {GrClose} from "react-icons/gr";
import {useEffect, useState} from "react";

export const Nav = () => {
    const [isNavLinksShowing, setIsNavLinksShowing] = useState(false);

    // windows scroll nav-links effects
    useEffect(() => {
        const navElement = document.querySelector('nav'); // Get the nav element once
        console.log(navElement);
        const handleScroll = () => {
            const shouldShowShadow = window.scrollY > 0;
            navElement.classList.toggle('navShadow', shouldShowShadow);

            if (window.innerWidth < 1024 && isNavLinksShowing) {
                setIsNavLinksShowing(false);
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isNavLinksShowing]);

    return (
        <nav>
            <div className="container nav-container">
                <Link to={'/'} className="logo">
                    <p>Books</p>
                </Link>
                <ul className={`nav-links ${isNavLinksShowing ? 'navLinksShow' : 'navLinksHide'}`}>
                    {
                        navLinks.map(({name, path}, index) => {
                            return (
                                <li key={index}>
                                    <NavLink className={({isActive}) =>
                                        isActive ? 'active' : ''
                                    } to={path}>{name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>

                <div className="nav-right">
                    {
                        navRight.managements.map((item, index) => {
                            return (
                                <Link key={index}
                                      target='_blank'
                                      className="management-icons"
                                      to={item.link}
                                >
                                    <item.icon/>
                                </Link>
                            )
                        })
                    }

                    <button className="menu-button" onClick={() => {
                        setIsNavLinksShowing(!isNavLinksShowing);
                    }}>
                        {
                            !isNavLinksShowing ?
                                <VscMenu/>
                                :
                                <GrClose/>
                        }
                    </button>
                </div>
            </div>
        </nav>

)
}