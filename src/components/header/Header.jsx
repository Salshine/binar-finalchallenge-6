import React, { useRef, useEffect } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import './Header.scss';

import logo from '../../assets/tmovie.png';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/auth'


const Header = () => {
    
    const { isLoggedIn } = useSelector  ((state) => state.auth)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    // const inLogout = () => {
    //     dispatch(logout(navigate));
    // }

    const headerNav = [
        {
            display: 'Home',
            path: '/'
        },
        {
            display: 'Movies',
            path: '/movie'
        },
        {
            display: 'TV Series',
            path: '/tv'
        },
        {
            display : 'Logout',
            // click : dispatch(logout(navigate))
        }
    ];
    
    const headerNavLogin = [
        {
            display: 'Login',
            path: '/login'
        },
        {
            display: 'Register',
            path: '/register'
        }
    ];


    

    const { pathname } = useLocation();
    const headerRef = useRef(null);

    const active = headerNav.findIndex(e => e.path === pathname);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);

    return (
        <div ref={headerRef} className="header">
            <div className="header__wrap container">
                <div className="logo">
                    <Link to="/">Moopi</Link>
                </div>
                <ul className="header__nav">
                    { isLoggedIn ? 
                    
                        headerNav.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                {e.display !== 'Logout' ? 
                                <Link to={e.path} >
                                    {e.display}
                                </Link>
                                :
                                <Link to={e.path} onClick={()=> dispatch(logout(navigate))}>
                                    {e.display}
                                </Link>}
                            </li>
                        ))
                        :
                        headerNavLogin.map((e, i) => (
                            <li key={i} className={`${i === active ? 'active' : ''}`}>
                                <Link to={e.path}>
                                    {e.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}

export default Header;