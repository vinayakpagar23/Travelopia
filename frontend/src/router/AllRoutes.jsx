import React from 'react'
import {Link, Route,Routes} from "react-router-dom";
import DetailsForm from '../pages/DetailsForm';
import AllData from '../pages/AllData';
const AllRoutes = () => {
  return (
    <Routes>
    <Route  path='/' element={<DetailsForm/>} exact/>
    <Route path='/details' element={<AllData/>} />
    </Routes>
  )
}

export default AllRoutes