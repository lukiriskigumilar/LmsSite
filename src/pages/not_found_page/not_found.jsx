import React from 'react';
import { Link } from 'react-router';

function PageNotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold">404 - Not Found</h1>
            <p className="text-gray-600">Halaman yang kamu cari tidak ditemukan.</p>
            <Link to="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                Kembali ke Home
            </Link>
        </div>
    );
}

export default PageNotFound;