import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'
const Navbar = () => {
    useEffect(() => {
        const elems = document.querySelectorAll('.sidenav');
        M.Sidenav.init(elems);

    }, [])
    return (
        <div>
            <div className="navbar-fixed ">
                <nav>
                    <div className="nav-wrapper" style={{ background: "#040504" }}>
                        <div className="container">
                            <Link to="/" className="brand-logo" style={{ color: "#39fc03" }}>Moviezmania</Link>
                            <ul className="right hide-on-med-and-down">
                                <li><Link to="/search" style={{
                                    letterSpacing: '3px',
                                    fontSize: '1.2rem'
                                }}>
                                    <i className="fas fa-search  left" style={{ fontSize: '1.2rem' }}></i>Search</Link></li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
