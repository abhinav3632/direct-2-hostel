import React from "react";

export const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-white pt-10">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-800">
            About
          </p>
        </div>

        <p className="text-xl text-justify text-slate-800 mt-10">
        We are a parcel delivery company dedicated to providing reliable and efficient transportation services. Our mission is to ensure that your packages are delivered to their intended destinations safely and on time. With our team of experienced professionals and a commitment to customer satisfaction, we strive to make parcel delivery a seamless and stress-free experience for all of our clients.
        </p>

        <p className="text-xl text-justify text-slate-800 mt-5">
        Our company was founded with the goal of filling a need for reliable and convenient parcel delivery services. Our founders saw an opportunity to improve upon the existing delivery options and provide customers with a better experience, they set out to build a company that would prioritize  security, and convenience.
        </p>

        <p className="text-xl text-justify text-slate-800 mt-5">
        We are driven by our commitment to reliability, efficiency, and customer satisfaction. We understand the importance of timely and secure delivery, which is why we employ the latest technology and industry best practices to ensure the safe transport of your packages from start to finish.
        </p>

        <p className="text-xl text-justify text-slate-800 mt-5">
        We understand the importance of balancing your educational responsibilities and receiving your parcels in a timely manner. With the traditional delivery hours falling during typical class times, we recognize the inconvenience it can cause. To address this issue, we offer a solution that eliminates the need for you to be present during the day for delivery. Our team will retrieve your parcel on your behalf and guarantee delivery to your hostel before 9pm in the evening. This allows you to focus on your studies, events, placement prepration, etc without interruption, and have the peace of mind knowing your parcels will be delivered to you safely and efficiently. We are dedicated to making the delivery process easy and convenient for you.        
        </p>

        {/* <p className="text-xl">
        Our company was founded with the goal of filling a need for reliable and convenient parcel delivery services. Our founders saw an opportunity to improve upon the existing delivery options and provide customers with a better experience, they set out to build a company that would prioritize  security, and convenience.
        </p> */}
      </div>
    </div>
  )
}