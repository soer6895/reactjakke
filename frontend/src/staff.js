// PhoneSearchPage.js

import React, { useState, useContext } from 'react';
import { phoneNumbers } from './simulatedData';
import AuthContext from './AuthContext';
import PinEntry from './pinEntry';

function PhoneSearchPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState(phoneNumbers);
    const [isPinAuthenticated, setPinAuthenticated] = useState(false);

    const { logoutUser } = useContext(AuthContext); // Using the context to access the logoutUser function


    const handleSearch = (term) => {
        if (term === '') {
            setResults(phoneNumbers);
        } else {
            const filteredResults = phoneNumbers.filter(item =>
                item.phoneNumber.includes(term) || item.id.toString() === term
            );
            setResults(filteredResults);
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        handleSearch(value);
    };

    const handlePinVerify = (pin) => {
        if (pin === "1234") { // should be kept in a more secure place. But doesnt matter right now. Only the staff has acces to this page anyway
            setPinAuthenticated(true);
        } else {
            alert('Incorrect PIN');
        }
    };


    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center">
            {isPinAuthenticated ? (


                <div className="mt-4 mb-4 bg-white p-4 rounded w-95 h-auto">
                    <h2 className="mb-4 font-semibold text-2xl text-center">Search Phone Numbers</h2>

                    <div className="flex items-center mb-4 relative"> {/* Add relative positioning */}
                        <input
                            type="tel"
                            value={searchTerm}
                            onChange={handleInputChange}
                            placeholder="Enter phone number..."
                            className="border p-2 rounded flex-grow"
                        />
                        {searchTerm && ( /* Render the "x" button only if there's a value in the input */
                            <button
                                onClick={() => handleInputChange({ target: { value: '' } })}
                                className="absolute text-xl right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                            >
                                x
                            </button>
                        )}
                    </div>

                    <div className="results-section mt-4">
                        <table className="min-w-full bg-white">
                            <thead>
                                <tr>
                                    <th className="border px-4 py-2">ID</th>
                                    <th className="border px-4 py-2">Phone Number</th>
                                </tr>
                            </thead>
                            <tbody>
                                {results.map(item => (
                                    <tr key={item.id}>
                                        <td className="border px-4 py-2 text-center">{item.id}</td>
                                        <td className="border px-4 py-2">{item.phoneNumber}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="w-full flex justify-end mt-2 mr-2">
                        <button onClick={() => {
                            if (window.confirm('Are you sure you want to logout?')) {
                                logoutUser();
                            }
                        }} className="bg-red-500 text-white px-4 py-2 rounded">Logout</button>
                    </div>
                </div>

            ) : (
                <PinEntry onPinSubmit={handlePinVerify} />
            )}
        </div>
    );
}

export default PhoneSearchPage;
