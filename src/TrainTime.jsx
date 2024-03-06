import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";


function TrainTime() {
  return (
    <div>
        <nav className='trainTime-nav'>
            <h1>Howrah Junction </h1>
            <IoIosArrowRoundForward className='arrow-icon'/>
            <h1>Delhi Junction</h1>
        </nav>
        <main>
             <div className='train-details'>
                 <div className='train-details-top'>
                     <h3 className='train-no'>11842</h3>
                     <h3 className='train-time'>2:13 AM <IoIosArrowRoundForward className='detail-icon'/>3:45 AM</h3>
                 </div>
                 <div className='train-details-bottom'>
                      <h1 className='train-name'>Gita Jayanti Express</h1>
                      <h2 className='runs-daily'>Runs Daily</h2>
                 </div>
             </div>
             
             <div className='train-details'>
                 <div className='train-details-top'>
                     <h3 className='train-no'>12533</h3>
                     <h3 className='train-time'>2:53 AM <IoIosArrowRoundForward className='detail-icon'/>3:18 AM</h3>
                 </div>
                 <div className='train-details-bottom'>
                      <h1 className='train-name'>Vande Bharat Express</h1>
                      <h2 className='runs-daily'>Runs Daily</h2>
                 </div>
             </div>

             <div className='train-details'>
                 <div className='train-details-top'>
                     <h3 className='train-no'>12533</h3>
                     <h3 className='train-time'>3:12 AM <IoIosArrowRoundForward className='detail-icon'/>3:40 AM</h3>
                 </div>
                 <div className='train-details-bottom'>
                      <h1 className='train-name'>Maharaja Express</h1>
                      <h2 className='depend'><span>S</span>MT<span>W</span>T<span>F</span>S</h2>
                 </div>
             </div>

             <div className='train-details'>
                 <div className='train-details-top'>
                     <h3 className='train-no-not'>12533</h3>
                     <h3 className='train-time-not'>4:10 AM <IoIosArrowRoundForward className='detail-icon'/>5:03 AM</h3>
                 </div>
                 <div className='train-details-bottom'>
                      <h1 className='train-name-not'>Black Dimond Express</h1>
                      <h2 className='depend'><span>S</span>MT<span>W</span>T<span>F</span>S</h2>
                 </div>
                 <h1 className='not-running'>Not running today</h1>
             </div>

             <div className='train-details'>
                 <div className='train-details-top'>
                     <h3 className='train-no'>12533</h3>
                     <h3 className='train-time'>5:30 AM <IoIosArrowRoundForward className='detail-icon'/>6:40 AM</h3>
                 </div>
                 <div className='train-details-bottom'>
                      <h1 className='train-name'>Duronto Express</h1>
                      <h2 className='runs-daily'>Runs Daily</h2>
                 </div>
             </div>

             <div className='train-details'>
                 <div className='train-details-top'>
                     <h3 className='train-no'>12533</h3>
                     <h3 className='train-time'>5:55 AM <IoIosArrowRoundForward className='detail-icon'/>6:55 AM</h3>
                 </div>
                 <div className='train-details-bottom'>
                      <h1 className='train-name'>Rajdhani Express</h1>
                      <h2 className='runs-daily'>Runs Daily</h2>
                 </div>
             </div>

             <div className='train-details'>
                 <div className='train-details-top'>
                     <h3 className='train-no-not'>12533</h3>
                     <h3 className='train-time-not'>6:00 AM <IoIosArrowRoundForward className='detail-icon'/>8:03 AM</h3>
                 </div>
                 <div className='train-details-bottom'>
                      <h1 className='train-name-not'>Bhopal SF Express</h1>
                      <h2 className='depend'><span>S</span>MT<span>W</span>T<span>F</span>S</h2>
                 </div>
                 <h1 className='not-running'>Not running today</h1>
             </div>

        </main>
    </div>
  )
}

export default TrainTime