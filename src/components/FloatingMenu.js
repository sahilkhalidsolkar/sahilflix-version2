import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import M from 'materialize-css'
const FloatingMenu = () => {
    useEffect(() => {
        const elems = document.querySelectorAll('.fixed-action-btn');
        M.FloatingActionButton.init(elems, {
            direction: 'top',
            hoverEnabled: false
        });

    }, [])


    return (
        <div>
            <div className="fixed-action-btn show-on-medium-and-down">
                <a className="btn-floating btn-large red">
                    <i className="fas fa-plus" style={{ background: "#77f50a", color: "black" }}></i>
                </a>
                <ul>
                    <li><Link to="/search" className="btn-floating " style={{ background: "#77f50a" }}><i className="fas fa-search " style={{ fontSize: '1rem', color: 'black' }}></i></Link></li>
                    {/* <li><Link to="/favourites" className="btn-floating " style={{ background: "#77f50a" }}><i className="fas fa-heart " style={{ fontSize: '1rem', color: 'black' }}></i></Link></li> */}
                    <li><Link to="/" className="btn-floating " style={{ background: "#77f50a" }}><i className="fas fa-home " style={{ fontSize: '1rem', color: 'black' }}></i></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default FloatingMenu
