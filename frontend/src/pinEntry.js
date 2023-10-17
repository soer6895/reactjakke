import React, { useState } from 'react';

const PinEntry = ({ onPinSubmit }) => {
    const [pin, setPin] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        onPinSubmit(pin);
    };

    return (
        <div className="flex bg-gray-100 py-4 px-4">
            <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-center text-2xl font-extrabold text-gray-900 ">
                    Enter your PIN
                </h2>
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                    <div>
                        <label htmlFor="pin" className="sr-only">PIN</label>
                        <input
                            id="pin"
                            type="tel" // Use "tel" to trigger dial pad on mobile devices
                            value={pin}
                            onChange={e => setPin(e.target.value)}
                            maxLength="4"
                            pattern="\d{4}"
                            placeholder="Enter 4-digit PIN"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PinEntry;
