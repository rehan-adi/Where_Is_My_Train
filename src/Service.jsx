import { FaArrowLeft } from "react-icons/fa6";
import { FiFilter } from "react-icons/fi";
import { GoHeartFill } from "react-icons/go";
import { GoHeart } from "react-icons/go";
import { RiShareLine } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";


const Service = () => {
 const [selectedIcon, setSelectedIcon] = useState(null);
 const [services, setServices] = useState([]);
 const [selectedService, setSelectedService] = useState(null);
 const [buttonText, setButtonText] = useState({});


 const handleIconClick = (iconName) => {
   setSelectedIcon(iconName);
 };


const handleButtonClick = (serviceId) => {
  setButtonText((prevButtonTexts) => {
    const updatedButtonTexts = {
      ...prevButtonTexts,
      [serviceId]: prevButtonTexts[serviceId] === "Add to Cart" ? "View Cart" : "Add to Cart",
    };
    return updatedButtonTexts;
  });
};



// async function handleButtonClick(serviceId) {
//   await new Promise((resolve) => {
//     setButtonText((prevButtonTexts) => {
//       const updatedButtonTexts = {
//         ...prevButtonTexts,
//         [serviceId]: prevButtonTexts[serviceId] === "Add to Cart" ? "View Cart" : "Add to Cart",
//       };
//       console.log(prevButtonTexts[serviceId], serviceId);
//       resolve(); 
//       return updatedButtonTexts;
//     });
//   });

// }





 useEffect(() => {
   const fetchData = async () => {
     try {
       const response = await fetch(
         "https://urban-space-backend.onrender.com/api/services"
       );
       const data = await response.json();
       setServices(data.api_data);
     } catch (error) {
       console.error("Error fetching data:", error);
     }
   };


   fetchData();
 }, []);


 const handleServiceClick = (service) => {
   const categoryData = services.find((category) => category.category === service.category);
   if (categoryData) {
    setSelectedService({ ...categoryData, services: categoryData.services });
    setButtonText((prevButtonTexts) => {
      const updatedButtonTexts = {
        ...prevButtonTexts,
        [service._id]: prevButtonTexts[service._id] || "Add to Cart",
      };
      return updatedButtonTexts;
    });
  } else {
    console.error("Category not found in the initial data");
  }
 };


 return (
   <div className="flex flex-col h-full min-h-screen bg-white">
     {/*Navbar Component */}
     <div className="flex flex-row justify-between mt-4">
       <div className="flex flex-row mt-4 items-center">
         <a href="/">
           <FaArrowLeft className="ml-4 text-lg text-gray-500" />
         </a>
         <h1 className="ml-6 text-lg text-gray-500 font-semibold">Services</h1>
       </div>


       <div className="flex flex-row items-center rounded-lg bg-gray-100 mt-4 mr-8 px-2 py-2 border">
         <FiFilter className="text-gray-500 text-md font-semibold" />
         <p className="text-xs ml-1 text-gray-500">Filter</p>
       </div>
     </div>


     {/*Services grid */}


     <div id="services-grid" className="flex flex-col bg-white mt-8 ">
       <div className="flex overflow-x-scroll pb-5 hide-scroll-bar">
         <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-2">
           {/* Hard-coded cards */}


           <div className="inline-block px-3">
             <div className="flex items-center justify-center border w-16 h-16 max-w-xs overflow-hidden rounded-full shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
               <GoHeartFill className="w-7 h-7 text-gray-300" />
             </div>
             <p className="text-center text-xs text-gray-400 mt-2">Wishlist</p>
           </div>


           <div className="inline-block px-3">
             <div
               className="flex flex-col border w-16 h-16 max-w-xs overflow-hidden rounded-full shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
               onClick={() =>
                 handleServiceClick({ category: "AC", services: [] })
               }
             >
               <img
                 src="assets/ac-repair.jpeg"
                 alt="Service 1"
                 className="w-full h-full object-fill rounded-lg "
               />
             </div>
             <p className="text-center text-xs text-gray-400 mt-2">
               AC Repair
             </p>
           </div>


           <div className="inline-block px-3">
             <div
               className="flex flex-col border w-16 h-16 max-w-xs overflow-hidden rounded-full shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
               onClick={() =>
                 handleServiceClick({ category: "Television", services: [] })
               }
             >
               <img
                 src="assets/tv-repair.jpeg"
                 alt="Service 2"
                 className="w-full h-full object-fill rounded-lg"
               />
             </div>
             <p className="text-center text-xs text-gray-400 mt-2">
               TV Repair
             </p>
           </div>


           <div className="inline-block px-3">
             <div
               className="flex flex-col border w-16 h-16 max-w-xs overflow-hidden rounded-full shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
               onClick={() =>
                 handleServiceClick({ category: "Refrigerator", services: [] })
               }
             >
               <img
                 src="assets/fridge-repair.png"
                 alt="Service 3"
                 className="w-full h-full object-fill rounded-lg"
               />
             </div>
             <p className="text-center text-xs text-gray-400 mt-2">
               Refrigerator Repair
             </p>
           </div>


           <div className="inline-block px-3">
             <div
               className="flex flex-col border w-16 h-16 max-w-xs overflow-hidden rounded-full shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
               onClick={() =>
                 handleServiceClick({ category: "Microwave", services: [] })
               }
             >
               <img
                 src="assets/micro-repair.jpeg"
                 alt="Service 4"
                 className="w-full h-full object-fill rounded-lg"
               />
             </div>
             <p className="text-center text-xs text-gray-400 mt-2">
               Microwave Repair
             </p>
           </div>
           <div className="inline-block px-3">
             <div
               className="flex flex-col border w-16 h-16 max-w-xs overflow-hidden rounded-full shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
               onClick={() =>
                 handleServiceClick({
                   category: "Washing Machine",
                   services: [],
                 })
               }
             >
               <img
                 src="assets/fridge-repair.png"
                 alt="Service 3"
                 className="w-full h-full object-fill rounded-lg"
               />
             </div>
             <p className="text-center text-xs text-gray-400 mt-2">
               Wash.. Repair
             </p>
           </div>
           <div className="inline-block px-3">
             <div
               className="flex flex-col border w-16 h-16 max-w-xs overflow-hidden rounded-full shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
               onClick={() =>
                 handleServiceClick({
                   category: "Water Purifier",
                   services: [],
                 })
               }
             >
               <img
                 src="assets/fridge-repair.png"
                 alt="Service 3"
                 className="w-full h-full object-fill rounded-lg"
               />
             </div>
             <p className="text-center text-xs text-gray-400 mt-2">
               RO Repair
             </p>
           </div>
         </div>
       </div>
     </div>


     {/* Product Cards based on selected service */}
     {selectedService && (
       <div className="flex flex-col mt-4">
         {selectedService.services.map((service) => (
           <div key={service._id} className="flex flex-col mt-8">
             <div className="flex w-full px-6">
               <img
                 src={service.service_img}
                 alt={service.service_title}
                 className="rounded-lg h-72"
               />
             </div>
             <div className="flex flex-row mt-4 px-8 justify-between items-center">
               <div className="">
                 <p className="text-sm text-black">{service.service_title}</p>
               </div>
               <div className="flex flex-row">
                 <RiShareLine className="text-xl" />
                 <GoHeart className="ml-4 text-xl" />
               </div>
             </div>
             <div className="flex flex-row mt-4 px-7 justify-between items-center">
               <div className="flex flex-col ml-2">
                 <h1 className="text-xl text-black font-semibold">₹{service.price}</h1>
                 <p className="text-xs text-red-400 underline decoration-dashed">
                   inc. of Taxes
                 </p>
               </div>
               <div
                 className="flex flex-row items-center rounded-lg  px-3 py-2 border border-red-400"
                 onClick={() => handleButtonClick(service._id)}
               >
                 <p className="text-sm ml-1 text-red-400 cursor-pointer ">{buttonText[service._id] || "Add to Cart"}</p>
               </div>
             </div>
             <div className="text-[#bca46c] flex flex-row justify-end items-center pr-8 mt-1">
               <p className="text-xs font-semibold">View Details</p>
               <IoIosArrowForward className="text-md font-extrabold" />
             </div>
           </div>
         ))}
       </div>
     )}


     <div className="h-20 bg-white"></div>


     {/*Footer fixed */}
     <footer className="fixed bottom-0 left-0 right-0 bg-gray-600 text-white py-4 px-2 flex justify-around">
       <a href="/">
       <IoHomeOutline
         size={20}
         onClick={() => handleIconClick("home")}
         className={`focus:outline-none focus:ring ${
           selectedIcon === "home" ? "text-yellow-500" : ""
         }`}
       />
       </a>
       <MdOutlineMiscellaneousServices
         size={24}
         onClick={() => handleIconClick("services")}
         className="focus:outline-none focus:ring text-yellow-500"
       />
       <a href="/cart">
         <IoCartOutline
           size={24}
           onClick={() => handleIconClick("cart")}
           className={`focus:outline-none focus:ring ${
             selectedIcon === "cart" ? "text-yellow-500" : ""
           }`}
         />
       </a>
       <a href="/account">
         <FaRegUser
           size={20}
           onClick={() => handleIconClick("user")}
           className={`sm:hover:text-yellow-500 hover:font-semibold focus:outline-none focus:ring ${
             selectedIcon === "user" ? "text-yellow-500" : ""
           }`}
         />
       </a>
     </footer>
   </div>
 );
};


export default Service;
