import React from "react";
import { BsStarFill } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import { Link } from "react-router-dom";

const freelancers = [
    {
        id: 1,
        name: "Wali Haider Jalali",
        rating: 4.5,
        profession: "Human Resources",
        locationicon: <IoLocationOutline className="w-5 h-5 text-[#1F72F2]" />,
        languageicon: <MdLanguage className="w-5 h-5 text-[#1F72F2]" />,
        city: "Khanwal",
        languages: ["English"],
        description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem...",
        price: "$60/day",
        servicesCount: 6,
        image: require('../../images/wali.png'),
    },
    {
        id: 2,
        name: "Wali Haider Jalali",
        rating: 4.5,
        profession: "Human Resources",
        locationicon: <IoLocationOutline className="w-5 h-5 text-[#1F72F2]" />,
        languageicon: <MdLanguage className="w-5 h-5 text-[#1F72F2]" />,
        city: "Khanwal",
        languages: ["English"],
        description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem...",
        price: "$60/day",
        servicesCount: 6,
        image: require('../../images/wali.png'),
    },
    {
        id: 3,
        name: "Wali Haider Jalali",
        rating: 4.5,
        profession: "Human Resources",
        locationicon: <IoLocationOutline className="w-5 h-5 text-[#1F72F2]" />,
        languageicon: <MdLanguage className="w-5 h-5 text-[#1F72F2]" />,
        city: "Khanwal",
        languages: ["English"],
        description:
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem...",
        price: "$60/day",
        servicesCount: 6,
        image: require('../../images/wali.png'),
    },
];

const FreelancerCard = ({ freelancer }) => (
    <Link to={`/freelancer/${freelancer.id}`}> {/* Wrap the card in a Link */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden border-2 border-[#1F72F2] cursor-pointer">
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
                <div className="mt-2 text-black ml-2">
                    <div className="flex gap-4 mt-5 ">
                        <p className="text-sm">{freelancer.locationicon}</p>
                        <p>{freelancer.city}</p>
                    </div>
                    <div className="flex gap-4 mt-1">
                        <p className="text-sm">{freelancer.languageicon}</p>
                        <p>{freelancer.languages}</p>
                    </div>
                    <p className="text-sm font-semibold  mt-6">{freelancer.description}</p>
                </div>
                <div className="flex justify-between mt-7 px-4  border-black border-t-2">
                    <div>
                        <p className="text-sm font-bold mt-2">{freelancer.servicesCount} services</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-medium text-[#1F72F2]">{freelancer.price}</h4>
                    </div>
                </div>
            </div>
        </div>
    </Link> // Close the Link
);

const Freelancerprofile = () => (
    <>
        <div className="mt-10 ml-4 md:ml-10 lg:ml-20">
            <h1 className="text-black text-2xl sm:text-3xl lg:text-4xl font-bold">
                Top Rated Freelancers
            </h1>
            <h1 className="mt-2 text-lg sm:text-xl lg:text-2xl">
                Browse talent for your projects
            </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-20 px-10 gap-10 mt-10">
            {freelancers.map((freelancer) => (
                <FreelancerCard key={freelancer.id} freelancer={freelancer} /> // Use id instead of name
            ))}
        </div>
        <button className="h-10 mb-10 w-40 bg-[#1F72F2] text-white rounded-lg transition-all duration-300 hover:bg-white hover:text-[#1F72F2] hover:border hover:border-[#1F72F2] mt-10 mx-auto block">
            View All Freelances
        </button>
    </>
);

export default Freelancerprofile;