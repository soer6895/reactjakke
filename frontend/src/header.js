import React, { useState, useRef, useEffect, useContext } from 'react'; // added useContext import
import { useNavigate } from 'react-router-dom';
import AuthContext from './AuthContext'; // update with correct path if necessary

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const navigate = useNavigate();

    const { user } = useContext(AuthContext); // extract user from AuthContext

    useEffect(() => {
        function handleOutsideClick(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <header className="p-2 bg-gray-100 text-black border-b border-gray-300">
            <div className="container mx-auto flex justify-between items-center">
                <button onClick={() => navigate('/')} className="mr-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 17l-5-5 5-5M18 17l-5-5 5-5"></path>
                    </svg>
                </button>
                <h1 onClick={() => navigate("/")} className="text-2xl font-semibold text-center cursor-pointer mr-4">
                    Jakkebiks
                </h1>
                <div>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <svg
                            className="w-6 h-6"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                    {isOpen && (
                        <div ref={menuRef} className="absolute right-0 mt-2 w-auto bg-white border border-gray-300 rounded shadow-xl">
                            {user && <a href="/staff" className="block px-4 py-2 text-black hover:bg-indigo-500 hover:text-white">For Staff</a>} {/* conditionally rendering the For Staff option */}
                            <a href="/about" className="block px-4 py-2 text-black hover:bg-indigo-500 hover:text-white">About</a>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
