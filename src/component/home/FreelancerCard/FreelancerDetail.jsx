import React from "react";
import { FaWhatsapp, FaLinkedin, FaGithub, FaTwitter, FaPhone, FaEnvelope } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdLanguage } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";
import Footer from "../../Footer/Footer";

const product = {
    id: 1,
    name: "Wali Haider Jalali",
    rating: 4.5,
    phoneNumber: "+92 123456789",
    email: "example@mail.com",
    location: "Khanwal, Pakistan",
    languages: ["English", "Urdu"],
    skills: ["React.js", "Node.js", "Tailwind CSS"],
    totalProjects: 120,
    totalEarnings: "$5000",
    workExperience: [
        {
            company: "ABC Company",
            role: "Software Engineer",
            years: "2020 - Present",
            description: "Worked on full-stack development using MERN stack."
        },
        {
            company: "XYZ Corp",
            role: "Frontend Developer",
            years: "2018 - 2020",
            description: "Focused on building UI components using React.js and Tailwind CSS."
        },
    ],
    education: [
        {
            degree: "Bachelor's in Computer Science",
            institution: "Islamia University of Bahawalpur",
            years: "2015 - 2019"
        }
    ],
    whatsapp: "https://wa.me/123456789",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/yourprofile",
    twitter: "https://twitter.com/yourprofile",
};

// Left Side Card with contact info and stats
const LeftSideCard = ({ product }) => (
    <div className="lg:w-1/3 bg-white shadow-md rounded-lg border-2 border-[#1F72F2] p-6">
        {/* Profile Image */}
        <img
            src={require('../../images/wali.png')} // Replace with the actual image path
            alt={product.name}
            className="w-32 h-32 rounded-full mx-auto"
        />
        <h2 className="text-2xl font-bold text-center mt-4">{product.name}</h2>

        {/* Profile Rating */}
        <div className="flex justify-center items-center mt-2">
            <BsStarFill className="w-5 h-5 text-yellow-500" />
            <span className="ml-2 text-gray-600">{product.rating} / 5</span>
        </div>

        {/* Contact Information */}
        <div className="mt-4 space-y-2 text-center">
            <p className="flex items-center justify-center gap-2">
                <FaPhone className="text-[#1F72F2]" /> {product.phoneNumber}
            </p>
            <p className="flex items-center justify-center gap-2">
                <FaEnvelope className="text-[#1F72F2]" /> {product.email}
            </p>
            <p className="flex items-center justify-center gap-2">
                <IoLocationOutline className="text-[#1F72F2]" /> {product.location}
            </p>
            <p className="flex items-center justify-center gap-2">
                <MdLanguage className="text-[#1F72F2]" /> {product.languages.join(", ")}
            </p>
        </div>

        {/* Skills */}
        <div className="mt-6">
            <h3 className="text-lg font-bold text-center">Skills</h3>
            <ul className="list-disc mt-2  text-center flex gap-2 ">
                {product.skills.map((skill, index) => (
                    <button className="h-10 w-40 bg-[#1F72F2] text-white rounded-lg transition-all duration-300 hover:bg-white hover:text-[#1F72F2] hover:border hover:border-[#1F72F2]" key={index}>{skill}</button>
                ))}
            </ul>
        </div>

        {/* Total Projects & Earnings */}
        <div className="mt-6 space-y-2 text-center">
            <p><strong>Total Projects:</strong> {product.totalProjects}</p>
            <p><strong>Total Earnings:</strong> {product.totalEarnings}</p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-4 mt-6">
            <a href={product.whatsapp} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp className="w-6 h-6 text-[#1F72F2]" />
            </a>
            <a href={product.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-6 h-6 text-[#1F72F2]" />
            </a>
            <a href={product.github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-6 h-6 text-[#1F72F2]" />
            </a>
            <a href={product.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter className="w-6 h-6 text-[#1F72F2]" />
            </a>
        </div>

        {/* Send Message Button */}
        <button className="mt-6 w-full bg-[#1F72F2] text-white py-2 rounded-lg hover:bg-white hover:text-[#1F72F2] hover:border hover:border-[#1F72F2] transition-all">
            Send Message
        </button>
    </div>
);


// Right Side (Experience and Education)
const RightSideDetails = ({ product }) => (
    <div className="lg:w-2/3 bg-white shadow-md rounded-lg p-6 border-2 border-[#1F72F2]">
        {/* Work Experience */}
        <h3 className="text-2xl font-bold">Work Experience</h3>
        <div className="mt-4 space-y-4">
            {product.workExperience.map((experience, index) => (
                <div key={index} className="p-4 bg-gray-100 rounded-md">
                    <h4 className="font-bold text-lg">{experience.company}</h4>
                    <p className="text-sm">{experience.role} - {experience.years}</p>
                    <p className="text-sm mt-2">{experience.description}</p>
                </div>
            ))}
        </div>

        {/* Education */}
        <h3 className="text-2xl font-bold mt-6">Education</h3>
        <div className="mt-4 space-y-4">
            {product.education.map((edu, index) => (
                <div key={index} className="p-4 bg-gray-100 rounded-md">
                    <h4 className="font-bold text-lg">{edu.degree}</h4>
                    <p className="text-sm">{edu.institution} - {edu.years}</p>
                </div>
            ))}
        </div>
    </div>
);

const ProductDetail = () => {
    return (
        <>
        <div className="container mx-auto p-4 lg:px-20">
            {/* Main Layout: Left and Right Sections */}
            <div className="flex flex-col lg:flex-row mt-10 gap-10">
                <LeftSideCard product={product} />
                <RightSideDetails product={product} />
              
            </div>
        </div>
          <Footer />
          </>
    );
};

export default ProductDetail;
