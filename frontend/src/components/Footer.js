import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-success text-white text-center py-3">
            <div className="container">
                <p className="mb-0">&copy; {new Date().getFullYear()} Your Lab Name. All rights reserved.</p>
                <p className="mb-0">Developed by AMIR SHAHZAD HASHMI</p>
            </div>
        </footer>
    );
};
export default Footer;
