import React from 'react'

function VideoCarousel() {
  return (
    <div className="flex flex-col bg-white mt-6 p-auto">
       <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
         <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-2">
           <div className="inline-block px-3">
             <div className="w-64 h-35 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
               <video
                 width="100%"
                 height="200%"
                 controls={false}
                 style={{ objectFit: "cover" }}
               >
                 <source src="src\assets\Ma.mp4" type="video/mp4" />
                 Your browser does not support the video tag.
               </video>
             </div>
           </div>


           <div className="inline-block px-3">
             <div className="w-64 h-35 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
               <video
                 width="100%"
                 height="200%"
                 controls={false}
                 style={{ objectFit: "cover" }}
               >
                 <source src="src\assets\Matrix2.mp4" type="video/mp4" />
                 Your browser does not support the video tag.
               </video>
             </div>
           </div>
           <div className="inline-block px-3">
             <div className="w-64 h-35 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
               <video
                 width="100%"
                 height="200%"
                 controls={false}
                 style={{ objectFit: "cover" }}
               >
                 <source src="src\assets\Metrix1.mp4" type="video/mp4" />
                 Your browser does not support the video tag.
               </video>
             </div>
           </div>
         </div>
       </div>
     </div>
  )
}

export default VideoCarousel