import { Link } from "react-router-dom";
import logo from '../../assets/logo2.png';

const NavBar = () => {
    const navItem = 
        <>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>Brands</Link></li>
        </>;

    return (
        <div className="bg-base-100">
            <div className="navbar container mx-auto">
                <div className="navbar-start flex items-center">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navItem}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">
                        <img className="h-16" src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex items-center">
                    <ul className="menu menu-horizontal px-1">
                        {navItem}
                    </ul>
                </div>
               
            </div>
        </div>
    );
};

export default NavBar;
