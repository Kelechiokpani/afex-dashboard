import DashboardOverview from "../components/DashboardOverview";
import ProductGrid from "../components/productGrid";
import React,{useEffect, useState} from "react"

import router from "next/router";


const Dashboard = ( ) => {

    return(

      <div>
          <DashboardOverview/>
          {/*---------------*/}
          <ProductGrid />
      </div>
    )
}
export default Dashboard