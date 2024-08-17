import { Link } from "react-router-dom";
import logo from '../../assets/logo2.png';
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useContext } from "react";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                console.log('User signed out successfully');
            })
            .catch((error) => {
                console.error('Error signing out:', error);
            });
    };

    const navItem = (
        <>
            <li><Link to='/' className="text-lg font-semibold text-gray-700 hover:text-gray-900">Home</Link></li>
            {/* Add more nav items as needed */}
        </>
    );

    return (
        <nav className="">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo Section */}
                <div className="flex items-center">
                    <Link to="/" className="flex items-center">
                        <img className="h-12 mr-3" src={logo} alt="Logo" />
                        <span className="text-xl font-bold text-gray-800">Glow Artisty</span>
                    </Link>
                </div>

                {/* Navigation Items (Desktop) */}
                <div className="hidden lg:flex space-x-6">
                    <ul className="flex space-x-4">
                        {navItem}
                    </ul>
                </div>

                {/* User Authentication Section */}
                <div className="flex items-center space-x-4">
                    {user ? (
                        <>
                            <div className="flex items-center space-x-2">
                                <img src={user.photoURL} className="w-10 h-10 rounded-full" alt="User Avatar" />
                                <span className="text-gray-700 font-medium">{user.displayName}</span>
                            </div>
                            <button
                                onClick={handleSignOut}
                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-200"
                            >
                                Log Out
                            </button>
                        </>
                    ) : (
                        <Link to="/logIn">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">
                                Log In
                            </button>
                        </Link>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden">
                    <button className="flex items-center text-gray-700 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Dropdown) */}
            <div className="lg:hidden">
                <ul className="px-4 pb-4 space-y-2">
                    {navItem}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
