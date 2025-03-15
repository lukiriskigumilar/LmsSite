import React, { useState } from 'react';
import countries from '../../data/countryList.json'


function CountryCode({onSelectCountry}) {
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    const [isOpen, setIsOpen] = useState(false);
    // const onSelectedCountry = [selectedCountry.dialCode, selectedCountry.name];

    // Fungsi untuk menangani pemilihan negara
    const handleCountrySelect = (country) => {
        setSelectedCountry(country);
        setIsOpen(false);
        if (onSelectCountry) {
            onSelectCountry(country.dialCode); 
        }

        // Tutup dropdown setelah memilih
    };


    return (
        <>
            <div className="relative inline-block text-left">
                <button
                    type="button"
                    className=" inline-flex justify-left border rounded-md border-gray-300 md:w-[150px] w-[110px] py-0 leading-tight outline-black h-[40px]"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="bg-gray-300 w-[60%] h-full rounded-l-sm flex items-center justify-center">
                        <img src={selectedCountry.flag} alt="indonesia" height={30} width={30} />
                    </div>
                    <div className="inline-flex items-center justify-between w-full px-2">
                        <p>{selectedCountry.dialCode}</p>
                        <svg
                            className="-mr-1 size-5 text-gray-400 transition-transform duration-200"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                            data-slot="icon"
                            style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                    <div className="absolute left-0 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10">
                        <ul className="py-2 text-gray-700 " >
                            {
                                countries.map((country, index) => (
                                    <li
                                        key={index}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-4"
                                        onClick={() => handleCountrySelect(country)}
                                    >
                                        <img src={country.flag} alt={country.name} height={30} width={30} />
                                        <p>{country.dialCode}</p>
                                    </li>
                                ))

                            }
                        </ul>
                    </div>
                )}
            </div>

        </>
    );
}

export default CountryCode;