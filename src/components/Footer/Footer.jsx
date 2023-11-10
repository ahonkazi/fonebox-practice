import Image from "next/image";
import React from "react";

import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "./_assets/footerLogo.png";
import star from "./_assets/starShape.svg";

const Footer = () => {
  return (
    <footer className="h-[auto] bg-[#2299F2]   text-white text-2xl">
      <div className="w-[full] h-full p-20 flex flex-col lg:flex-row">
        <LeftComponent />
        <div className="flex w-[60%] mt-5 lg:mt-0 lg:w-[40%] mx-auto">
          {/* resources section */}
          <div className="flex flex-col w-[50%] p-5 ml-10 ">
            <p>Resources</p>
            <a href="#" className="font-thin text-sm py-3">
              Blog
            </a>
            <a href="#" className="font-thin text-sm py-3">
              Team
            </a>
            <a href="#" className="font-thin text-sm py-3">
              FAC's
            </a>
            <a href="#" className="font-thin text-sm py-3">
              Join as influencer
            </a>
          </div>

          {/* company section */}
          <div className="flex flex-col w-[50%] p-5 ml-10  ">
            <p>Company</p>
            <a href="#" className="font-thin text-sm py-3">
              About us
            </a>
            <a href="#" className="font-thin text-sm py-3">
              Contact us
            </a>
            <a href="#" className="font-thin text-sm py-3">
              Services
            </a>
            <a href="#" className="font-thin text-sm py-3">
              Terms and privacy
            </a>
          </div>
        </div>
        <RightComponent />
      </div>
      <hr className="border-white mt-4 mx-4" />
      <div className="w-full h-10 flex justify-center items-center">
        <p className="text-xs">&copy; Fontbox 2022. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

function LeftComponent() {
  var links = [
    { icon: <FaInstagram />, link: "#" },
    { icon: <FaFacebookF />, link: "#" },
    { icon: <FaTwitter />, link: "#" },
    { icon: <FaLinkedinIn />, link: "#" },
  ];
  return (
    <div className="flex flex-col justify-center lg:justify-between items-center lg:items-start mx-auto w-[60%]   lg:w-[25%] p-5 relative ">
      <div>
        <Image className="w-[50%]" src={logo} alt="experience1-img" />
        <p className="text-xs my-5 text-justify font-thin font-Inter">
          Industrial, manufacturing, management, and smart building project
          consultancy with 23 years of experience and awards
        </p>
      </div>
      <div className="flex items-center gap-5 mb-3 ">
        {links.map((e, i) => {
          return (
            <a
              key={i + 1}
              href={e.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1"
            >
              {e.icon}
            </a>
          );
        })}
      </div>
      <Image src={star} alt="star" className="absolute -right-10 -bottom-10" />
    </div>
  );
}

function RightComponent() {
  return (
    <div className="flex flex-col justify-center lg:justify-between items-center mx-auto mt-10 lg:mt-0 w-[60%] lg:w-[25%] lg:p-5  relative ">
      <p className="font-bold">Newsletter</p>
      <div className="flex items-center  py-1">
        <input
          type="text"
          placeholder="Enter your text"
          className="outline-none bg-transparent text-white placeholder-white text-sm border-b border-white"
        />
        <button className="bg-slate-200 text-black px-2 py-1 ml-2 rounded-md text-xs font-bold">
          Subscribe
        </button>
      </div>

      <Image src={star} alt="star" className="absolute -right-10 -top-10" />
    </div>
  );
}
