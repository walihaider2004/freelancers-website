import React from "react";
import { BsStarFill } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const freelancers = [
  {
    name: "Wali Haider Jalali",
    rating: 4.5,
    profession: "Human Resources",
    location: <IoLocationOutline className="w-5 h-5 text-[#1F72F2]"/>,
    city: "Khanwal",
    languages: ["English"],
    description:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem...",
    services: ["Recruitment", "Software"],
    price: "$60/day",
    servicesCount: 6,
    image: require('../images/wali.png'),
  }
];

const FreelancerCard = ({ freelancer }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden border-2">
    <div className="p-4">
      <div className="flex items-center">
      <img src={freelancer.image} alt="/" className="w-12 h-12 rounded-full" />
        <div className="ml-4">
          <h3 className="text-lg font-medium">{freelancer.name}</h3>
          <div className="flex items-center ">
          <BsStarFill className="w-4 h-4 text-yellow-500" />
            <span className="ml-2 text-gray-600">
              {freelancer.rating}
            </span>
            <span className="mx-2 text-gray-600">•</span>
            <span className="text-gray-600">
              {freelancer.profession}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-2 text-black">
       <div className="flex gap-4 mt-5">
       <p className="text-sm">{freelancer.location}</p>
       <p>{freelancer.city}</p>
       </div>
        <p className="text-sm">
          <svg
            className="w-4 h-4 inline-block mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 8h10M7 12h4m1 5H8m5 0a2 2 0 11-4 0 2 2 0 014 0zM7 8h10"
            />
          </svg>
          {freelancer.languages.join(", ")}
        </p>
        <p className="text-sm">{freelancer.description}</p>
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <h4 className="text-lg font-medium">{freelancer.services.join(", ")}</h4>
          <p className="text-sm">{freelancer.servicesCount} services</p>
        </div>
        <div>
          <h4 className="text-lg font-medium">{freelancer.price}</h4>
        </div>
      </div>
    </div>
  </div>
);

const Freelancerprofile = () => (
  <div className="max-w-md  px-10 mt-10">
    <h2 className="text-lg font-bold mb-4">Freelancers</h2>
    {freelancers.map((freelancer) => (
      <FreelancerCard key={freelancer.name} freelancer={freelancer} />
    ))}
  </div>
);

export default Freelancerprofile;