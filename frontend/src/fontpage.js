import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import deletePng from './icon/delete.png';
//add a icon that turns green when the nfc has been scanned. the nfc logic must therefore also be added here



function App() {
    const navigate = useNavigate();

    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedCountryCode, setSelectedCountryCode] = useState('+45');
    const countries = [
        { name: 'DK', code: '+45' },
        { name: 'USA', code: '+1' },
        { name: 'SWE', code: '+30' },//add rules, fx max and min 8 digits for DK. And adsd flags
        // ... add other countries here
    ];

    const handleKeyPress = (key) => {
        setPhoneNumber(prev => prev + key);
    }

    const handleClear = () => {
        setPhoneNumber('');
    }

    const handleDelete = () => {
        setPhoneNumber(prev => prev.slice(0, -1));
    }

    const handleConfirm = () => {
        console.log("Phone Number:", selectedCountryCode, phoneNumber);
        navigate("/nfcCon", {
            state: { phoneNumber: phoneNumber, countryCode: selectedCountryCode }
        });
    }

    return (
        <div className=" flex flex-col items-center ">
            <div className="mt-4 mb-4 bg-white p-4 rounded w-95 h-80">
                <h2 className="mb-4 font-semibold text-2xl text-center">Add phone number for ticket</h2>
                <div className="flex items-center mb-4">
                    <select
                        className="mr-4 pt-2 pb-2 border rounded"
                        value={selectedCountryCode}
                        onChange={e => setSelectedCountryCode(e.target.value)}
                    >
                        {countries.map(country => (
                            <option key={country.code} value={country.code}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                    <div className="flex justify-start items-center  border-b">
                        <span className="mr-2">{selectedCountryCode}</span>
                        <input
                            type="tel"
                            readOnly
                            className="w-full p-2 text-2xl border-0 outline-none"
                            value={phoneNumber}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                    {['1', '2', '3', '4', '5', '6', '7', '8', '9', 'Clear', '0'].map(key => (
                        <button
                            key={key}
                            className="w-full h-20 bg-gray-200 rounded hover:bg-gray-300"
                            onClick={() => {
                                if (key === 'Clear') handleClear();
                                else handleKeyPress(key);
                            }}
                        >
                            {key}
                        </button>
                    ))}
                    <button
                        className="w-full h-20 bg-gray-200 rounded hover:bg-gray-300 relative"
                        onClick={handleDelete}
                    >
                        <img src={deletePng} alt="Delete" className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                    </button>
                </div>
            </div>

            <button
                className="mb-4 p-4 rounded bg-indigo-500 hover:bg-indigo-900 text-white"
                onClick={handleConfirm}
            >
                Confirm
            </button>

            <p className="text-sm text-gray-600 text-center">
                By confirming, you agree to Privacy Policy &amp; Terms &amp; Conditions.
            </p>
        </div>
    );
}

export default App;
