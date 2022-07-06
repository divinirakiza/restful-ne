import React, {useState, useEffect} from 'react';

import {Link} from 'react-router-dom';

export const Navbar = () => {
    const [state, setState] = useState({page: 1});

   const handleChange = page => {
        setState({ page });
    }
    
    
    return (
            <React.Fragment>
                <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-blue-600 text-gray-200  navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                      
                    <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent1">
                        <a className="text-xl text-white pr-2 font-semibold" href="#">VMS</a>
                        {/* Left links */}
                      
                    </div>
                    {/* Collapsible wrapper */}
                    {/* Right elements */}
                    {/* <div className="flex items-center relative">
                        <Link to="/">
                            <span className={'px-9 active'} onClick={() => handleChange(1)}>Purchaser</span>
                        </Link>
                        <Link to="/check">
                            <span  className={''} onClick={() => handleChange(2)}>Checker</span>
                        </Link>
                    </div> */}
                    {/* Right elements */}
                    </div>
                </nav>
                    
           
               
            </React.Fragment>
    )
}