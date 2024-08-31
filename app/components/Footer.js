import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 mt-5">
      <div className="container mx-auto text-center flex justify-around">
        <p className="mb-4">&copy; 2024 My Jarvo. All rights reserved.</p>
        <ul className="flex justify-center gap-6">
          <li><Link href="#" className="hover:text-gray-400">Privacy Policy</Link></li>
          <li><Link href="#" className="hover:text-gray-400">Terms of Service</Link></li>
          <li><Link href="#" className="hover:text-gray-400">Contact</Link></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
