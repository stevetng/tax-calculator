// src/components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-100 p-4 w-full text-black border">
      <div className="flex flex-col md:flex-row">
        <h1 className="text-2xl md:text-2xl font-bold text-gray-800 max-w-6xl mx-auto w-full h-full">2024 Presidential Tax Calculator</h1>
        <p className="font-semibold text-gray-800 p-2 text-base md:text-base whitespace-nowrap"> <a href="#TaxBracket"> Tax Bracket Details</a></p>
        <p className="font-semibold text-gray-800 p-2 text-base md:text-base whitespace-nowrap"> <a href="#MoreInfo"> Policy Breakdown </a></p>
        <p className="font-semibold text-gray-800 p-2 text-base md:text-base"> <a href="#CalculationDetails"> Calculations </a></p>
      </div>
    </header>
  );
};
export default Header;
