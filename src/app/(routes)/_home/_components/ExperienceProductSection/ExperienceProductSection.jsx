import React from "react";

import { SectionTitle } from "@/components/typography/Typography";
import exp1 from "../../_assets/experience1.png";
import exp2 from "../../_assets/experience2.png";
import Image from "next/image";

const ExperienceProductSection = () => {
  return (
    <div className="experience-section site-container mt-section ">
      {/* top */}
      <div className="flex flex-col-reverse md:flex-row justify-between p-5">
        <div className="w-[80%] mr-10">
          <SectionTitle
            subTitle="Experience Product"
            title="Experience The Power"
            mdTitle="Experieence"
            nextLine={"of Technology"}
            mdNextLine="The Power of Technology"
            responsive={true}
          />
          <p className="w-[70%] mx-auto md:mx-0 text-justify text-[#4C4C4C] font-Inter">
            Fonebox Automation Helps Manufacturers Solve Challenging Problems,
            Introduces New Industrial Data Ops Solution. Fonebox Automation
            provide best automation products.
          </p>
        </div>
        <div className="w-[30%] h-[200px] xs:h-[220px] 2xl:h-[350px] rounded-2xl flex justify-center items-center  overflow-hidden">
          <Image
            className="rounded-2xl object-cover w-full"
            src={exp1}
            alt="experience1-img"
          />
        </div>
      </div>

      {/* Bottom */}
      <div className="flex justify-between mt-10 relative p-5">
        <div className="w-[70%]">
          <Image
            className="h-full rounded-2xl object-cover w-full object-center"
            src={exp2}
            alt="experience2-img"
          />

        </div>
        <div className="mx-10 ">
          <div className="w-56 mb-10 ">
            <p className="text-[18px] xs:text-[20px] 2xl:text-[22px] font-medium font-Inter leading-[120%]">Future Technology</p>
            <p className="text-Gray 2xl:text-[18px] text-sm xs:text-base my-1.5 font-Inter leading-[160%] ">Fonebox Automation provide best automation products.</p>
          </div>
          <div className="w-56 mb-5 ">
            <p className="text-[18px] xs:text-[20px] 2xl:text-[22px] font-medium font-Inter leading-[120%]">Our Missioin</p>
            <p className="text-Gray 2xl:text-[18px] text-sm xs:text-base my-1.5 font-Inter leading-[160%] ">Fonebox Automation provide best automation products.</p>
          </div>
        </div>
        <span className="absolute -bottom-0.5 -left-0.5 z-10  pointer-events-none ">
          <svg
            className="w-[50px] h-[50px]"
            viewBox="0 0 65 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="32.5"
              cy="32.5"
              r="32.5"
              fill="#2298F1"
              fillOpacity="0.6"
            />
          </svg>
        </span>

      </div>

      <div className="flex justify-end mr-20 ">
        <svg width="154" height="154" viewBox="0 0 154 154" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M125.478 54.3455C114.956 52.652 109.387 54.1531 106.336 57.4876C103.282 60.8208 102.825 65.801 102.37 70.7824C102.075 74.2277 101.774 77.7433 100.771 80.6802C99.7263 83.7455 97.8885 86.2674 94.4794 87.7083C93.6703 88.0316 92.5268 88.1452 91.1477 87.9437C89.2455 87.7461 86.8075 87.1105 84.0461 86.1239C73.5089 82.5317 57.8399 74.6524 47.3698 72.1066C44.9762 71.4892 42.8502 71.1994 41.1548 71.305C39.6685 71.4235 38.5299 71.8299 37.9082 72.7396C37.4024 73.4784 37.2596 74.5117 37.4287 75.9639C37.7286 78.4159 39.0394 81.7189 41.5149 86.2275C43.6825 90.173 46.4398 93.8514 48.7076 97.7653C52.2625 103.881 55.8106 110.212 58.0566 116.591C58.192 117.011 57.9862 117.435 57.5882 117.563C57.1638 117.753 56.7353 117.505 56.6 117.086C54.3875 110.793 50.8822 104.552 47.3747 98.5288C45.0727 94.6737 42.3314 90.9298 40.1553 86.9807C37.5367 82.268 36.2065 78.7385 35.8987 76.1377C35.6378 74.2839 35.9385 72.8782 36.6308 71.8519C37.3301 70.8285 38.478 70.1349 39.9689 69.8727C41.9448 69.5183 44.6246 69.816 47.7474 70.5869C58.2525 73.1469 73.9795 81.0508 84.5533 84.658C87.1903 85.5936 89.5242 86.1862 91.323 86.4142C92.3857 86.5588 93.2541 86.5507 93.9031 86.2345C96.831 85.0331 98.3951 82.8362 99.3116 80.1551C100.269 77.3453 100.54 73.9625 100.845 70.5941C101.304 65.3235 101.934 59.9771 105.193 56.4369C108.455 52.8976 114.423 50.9777 125.717 52.8422C126.155 52.876 126.439 53.2834 126.374 53.6937C126.31 54.104 125.89 54.4417 125.478 54.3455Z" fill="#FFE0D6"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M125.94 53.5985C125.865 53.4951 125.644 53.2584 125.444 53.1037C124.502 52.2807 122.954 51.21 122.506 50.8808C118.655 47.7007 114.175 44.5536 109.445 42.6148C109.049 42.4522 108.856 42.0088 109.011 41.6355C109.191 41.1999 109.641 41.0204 110.038 41.1829C114.904 43.1779 119.503 46.4463 123.508 49.6167C123.937 50.011 125.51 51.0925 126.469 51.9226C126.818 52.2113 127.098 52.472 127.255 52.682C127.375 52.8766 127.441 53.0491 127.464 53.2039C127.552 53.5314 127.492 53.9436 127.325 54.3122C127.132 54.7423 126.783 55.1814 126.334 55.5795C125.421 56.4425 124.035 57.3299 122.934 58.0432C122.307 58.4411 121.764 58.8008 121.532 59.0697C119.543 61.3838 119.284 64.698 121.43 68.1982C121.646 68.5779 121.536 69.0426 121.173 69.2577C120.81 69.4728 120.334 69.3504 120.092 69.0326C117.538 64.7834 117.95 60.8762 120.348 58.0747C120.938 57.3703 123.072 56.2076 124.618 55.0218C125.082 54.6298 125.475 54.2808 125.733 53.9499C125.814 53.8378 125.861 53.7841 125.915 53.6608C125.917 53.6615 125.945 53.6004 125.94 53.5985Z" fill="#FFE0D6"></path></svg>
      </div>
    </div>
  );
};

export default ExperienceProductSection;
