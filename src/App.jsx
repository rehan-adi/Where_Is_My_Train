import TrainTime from "./TrainTime"
import React from "react";
import WMT_UI from "./WMT_UI"
import { BrowserRouter , Routes, Route } from 'react-router-dom';

function App() {
 

  return (
    <BrowserRouter>
         <Routes>
         <Route path="/" element={<WMT_UI />} />
        <Route path="/train-time" element={<TrainTime />} />
         </Routes>
    </BrowserRouter>
  )
}

export default App
