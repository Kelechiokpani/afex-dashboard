import React from 'react';
import DashboardOverview from "../components/DashboardOverview";
import ProductGrid from "../components/productGrid";



const HomePage = () => {

    return (
        <div>
            <DashboardOverview/>
            {/*---------------*/}
            <ProductGrid />
        </div>

    );
};

export default HomePage;
