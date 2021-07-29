import React from 'react';
import '../App.css';

const Topbar = () => {
    return ( 
        <div>
            <header className="top-bar">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div>
                    <a className="navbar-brand logo" href="#">EDYODA</a>
                    <span className="logo-stories-text">Stories</span> 
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <div className="dropdown-text">
                                    Explore Categories
                                <span className="dropdown-text-icon"><i className="fas fa-chevron-down"></i></span>
                                </div>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            
                            <li className="nav-item">
                               <div className="nav-link top-bar-msg">
                               EdYoda is free learning and knowledge
                               sharing platform for techies
                               </div>
                            </li>

                            <li className="nav-item">
                               <div className="nav-link">
                                   <button className="top-bar-btn">Go To Main Website</button>
                               </div>
                            </li>
                             
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    );
}
 
export default Topbar;