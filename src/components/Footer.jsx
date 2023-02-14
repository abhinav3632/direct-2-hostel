import React from "react";
import ItemsContainer from "./ItemsContainer";
export const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white mt-16">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          <span className="text-cyan-400 p-100">D2H</span> is with you!
        </h1>
      </div>
      <ItemsContainer />
      <div
        className="md:flex items-center justify-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-100 text-sm pb-8">
        <span>Copyright © 2023 D2H. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
      </div>
    </footer>
  );
};

export default Footer;