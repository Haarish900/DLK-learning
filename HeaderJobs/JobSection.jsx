// import React, { useState } from "react";
// import Categories from "./Categories";
// import Locations from "./Locations";
// import JobCards from "./JobCards";
// import JobButton from "./JobButton";
// import FullTimeJobs from "./FullTimeJobs"; // Import FullTimeJobs component

// export default function JobsSection() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedCountry, setSelectedCountry] = useState("");
//   const [selectedCity, setSelectedCity] = useState("");
//   const [showFullTimeJobs, setShowFullTimeJobs] = useState(false);

//   const handleOpenFullTimeJobs = () => {
//     setShowFullTimeJobs(true);
//   };

//   const handleCloseFullTimeJobs = () => {
//     setShowFullTimeJobs(false);
//   };

//   return (
//     <>
//       <section className="flex">
//         {/* Sidebar */}
//         <aside className="w-72 border-r border-gray-100 p-6 bg-white min-h-screen">
//           {/* Pass the handler as prop */}
//           <JobButton onOpenFullTimeJobs={handleOpenFullTimeJobs} />
          
//           <Categories 
//             selectedCategory={selectedCategory} 
//             onSelectCategory={setSelectedCategory} 
//           />
//           <Locations
//             selectedCountry={selectedCountry}
//             onCountryChange={setSelectedCountry}
//             selectedCity={selectedCity}
//             onCityChange={setSelectedCity}
//           />
//         </aside>
        
//         {/* Main Jobs Content */}
//         <main className="flex-1 p-8 bg-[#fafbfd] min-h-screen">
//           <div className="flex items-center justify-between pb-6">
//             <div className="text-lg font-semibold text-gray-800">
//               Full-Time Jobs <span className="text-gray-400 font-normal">(9)</span>
//             </div>
//             <input
//               type="text"
//               className="px-4 py-2 border border-gray-200 rounded-lg ml-auto bg-white text-gray-700 placeholder-gray-400"
//               style={{ minWidth: 260 }}
//               placeholder="Search Full-Time Jobs..."
//             />
//           </div>
//           <JobCards />
//         </main>
//       </section>

//       {/* FullTimeJobs Modal - Same pattern as JobApplication */}
//       {showFullTimeJobs && (
//         <FullTimeJobs onClose={handleCloseFullTimeJobs} />
//       )}
//     </>
//   );
// }




// import React, { useState } from "react";
// import Categories from "./Categories";
// import Locations from "./Locations";
// import JobCards from "./JobCards";
// import JobButton from "./JobButton";
// import FullTimeJobs from "./FullTimeJobs";

// export default function JobsSection() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [selectedCountry, setSelectedCountry] = useState("");
//   const [selectedCity, setSelectedCity] = useState("");
//   const [showFullTimeJobs, setShowFullTimeJobs] = useState(false);

//   const handleOpenFullTimeJobs = () => {
//     setShowFullTimeJobs(true);
//   };

//   const handleCloseFullTimeJobs = () => {
//     setShowFullTimeJobs(false);
//   };

//   return (
//     <>
//       {/* Mobile Header */}
//       <div className="lg:hidden bg-white border-b border-gray-200 p-4">
//         <div className="text-lg font-semibold text-gray-800 text-center">
//           Jobs
//         </div>
//       </div>

//       <section className="flex flex-col min-h-screen">
//         {/* Filters Section - Always at top */}
//         <div className="
//           w-full 
//           border-b border-gray-100 
//           bg-white 
//           order-1
//         ">
//           <div className="p-4 sm:p-6">
//             {/* Header */}
//             <div className="flex items-center justify-between mb-4 lg:mb-6">
//               <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
//             </div>

//             {/* Filters Content - Responsive layout */}
//             <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:space-x-6 space-y-4 lg:space-y-0">
//               {/* Left side - Job Button and Categories */}
//               <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
//                 <JobButton onOpenFullTimeJobs={handleOpenFullTimeJobs} />
                
//                 <div className="flex-1">
//                   <Categories 
//                     selectedCategory={selectedCategory} 
//                     onSelectCategory={setSelectedCategory} 
//                   />
//                 </div>
//               </div>

//               {/* Right side - Locations */}
//               <div className="flex-1 lg:max-w-md">
//                 <Locations
//                   selectedCountry={selectedCountry}
//                   onCountryChange={setSelectedCountry}
//                   selectedCity={selectedCity}
//                   onCityChange={setSelectedCity}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
        
//         {/* Main Jobs Content */}
//         <main className="
//           flex-1 p-4 sm:p-6 lg:p-8 
//           bg-[#fafbfd] 
//           min-h-screen
//           order-2
//         ">
//           {/* Header Section */}
//           <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 sm:pb-6">
//             <div className="text-lg font-semibold text-gray-800">
//               Full-Time Jobs <span className="text-gray-400 font-normal">(9)</span>
//             </div>
            
//             {/* Search Input */}
//             <div className="w-full sm:w-auto">
//               <input
//                 type="text"
//                 className="w-full sm:w-64 lg:w-80 px-3 sm:px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm sm:text-base"
//                 placeholder="Search Full-Time Jobs..."
//               />
//             </div>
//           </div>

//           {/* Job Cards */}
//           <JobCards />
//         </main>
//       </section>

//       {/* FullTimeJobs Modal */}
//       {showFullTimeJobs && (
//         <FullTimeJobs onClose={handleCloseFullTimeJobs} />
//       )}
//     </>
//   );
// }




import React, { useState } from "react";
import Categories from "./Categories";
import Locations from "./Locations";
import JobCards from "./JobCards";
import JobButton from "./JobButton";
import FullTimeJobs from "./FullTimeJobs";
import Freelancer from "./Freelancer"; // Import the Freelancer component

export default function JobsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [showFullTimeJobs, setShowFullTimeJobs] = useState(false);
  const [showFreelancer, setShowFreelancer] = useState(false); // New state for Freelancer modal

  const handleOpenFullTimeJobs = () => {
    setShowFullTimeJobs(true);
  };

  const handleCloseFullTimeJobs = () => {
    setShowFullTimeJobs(false);
  };

  const handleOpenFreelancer = () => {
    setShowFreelancer(true);
  };

  const handleCloseFreelancer = () => {
    setShowFreelancer(false);
  };

  return (
    <>
      {/* Mobile Header - Only for mobile */}
      <div className="lg:hidden bg-white border-b border-gray-200 p-4">
        <div className="text-lg font-semibold text-gray-800 text-center">
          Jobs
        </div>
      </div>

      <section className="flex flex-col lg:flex-row min-h-screen">
        {/* Mobile Filters - Top (for mobile/tablet) */}
        <div className="lg:hidden w-full border-b border-gray-100 bg-white order-1">
          <div className="p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
            </div>

            <div className="flex flex-col space-y-4">
              <JobButton 
                onOpenFullTimeJobs={handleOpenFullTimeJobs} 
                onOpenFreelancer={handleOpenFreelancer} // Pass the handler
              />
              
              <Categories 
                selectedCategory={selectedCategory} 
                onSelectCategory={setSelectedCategory} 
              />
              
              <Locations
                selectedCountry={selectedCountry}
                onCountryChange={setSelectedCountry}
                selectedCity={selectedCity}
                onCityChange={setSelectedCity}
              />
            </div>
          </div>
        </div>
        
        {/* Desktop Sidebar - Side (for desktop) */}
        <aside className="hidden lg:block w-72 border-r border-gray-100 p-6 bg-white min-h-screen">
          <JobButton 
            onOpenFullTimeJobs={handleOpenFullTimeJobs} 
            onOpenFreelancer={handleOpenFreelancer} // Pass the handler
          />
          
          <Categories 
            selectedCategory={selectedCategory} 
            onSelectCategory={setSelectedCategory} 
          />
          
          <Locations
            selectedCountry={selectedCountry}
            onCountryChange={setSelectedCountry}
            selectedCity={selectedCity}
            onCityChange={setSelectedCity}
          />
        </aside>
        
        {/* Main Jobs Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-[#fafbfd] min-h-screen lg:order-none order-2">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 sm:pb-6">
            <div className="text-lg font-semibold text-gray-800">
              Full-Time Jobs <span className="text-gray-400 font-normal">(9)</span>
            </div>
            
            {/* Search Input */}
            <div className="w-full sm:w-auto">
              <input
                type="text"
                className="w-full sm:w-64 lg:w-80 px-3 sm:px-4 py-2 border border-gray-200 rounded-lg bg-white text-gray-700 placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-sm sm:text-base"
                placeholder="Search Full-Time Jobs..."
              />
            </div>
          </div>

          {/* Job Cards */}
          <JobCards />
        </main>
      </section>

      {/* FullTimeJobs Modal */}
      {showFullTimeJobs && (
        <FullTimeJobs onClose={handleCloseFullTimeJobs} />
      )}

      {/* Freelancer Modal */}
      {showFreelancer && (
        <Freelancer onClose={handleCloseFreelancer} />
      )}
    </>
  );
}