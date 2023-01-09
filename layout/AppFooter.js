
import React  from 'react';
import Marquee from "react-fast-marquee";

const AppFooter = () => {

    return (
        <div>
                <div className="grid">
                    <Marquee>
                    <div className="col-12 md:col-2 sm:col-2">
                        <div className="flex align-items-center ">
                            <div>
                                <span className="text-900 text-xl font-medium mb-2">Soybean (SBBS)</span>
                                <p className=" mb-0 text-600 font-medium text-sm">₦30,834.59</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 md:col-2 sm:col-2">
                        <div className="  flex align-items-center ">
                            <div>
                                <span className="text-900 text-xl font-medium mb-2">Sorghum (SSGM)</span>
                                <p className=" mb-0 text-600 font-medium text-sm">₦30,834.59</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 md:col-2 sm:col-2">
                        <div className="  flex align-items-center ">
                            <div>
                                <span className="text-900 text-xl font-medium mb-2">Soybean (SBBS)</span>
                                <p className=" mb-0 text-600 font-medium text-sm">₦30,834.59</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 md:col-2 sm:col-2">
                        <div className="  flex align-items-center ">
                            <div>
                                <span className="text-900 text-xl font-medium mb-2">Maize (SMAZ)</span>
                                <p className=" mb-0 text-600 font-medium text-sm">₦30,834.59</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 md:col-2 sm:col-2">
                        <div className="  flex align-items-center ">
                            <div>
                                <span className="text-900 text-xl font-medium mb-2">Paddy Rice (SPRL)</span>
                                <p className=" mb-0 text-600 font-medium text-sm">₦30,834.59</p>
                            </div>

                        </div>
                    </div>
                    <div className="col-12 md:col-2 sm:col-2">
                        <div className="  flex align-items-center ">
                            <div>
                                <span className="text-900 text-xl font-medium mb-2">Cocoa (SCOC)</span>
                                <p className=" mb-0 text-600 font-medium text-sm">₦30,834.59</p>
                            </div>

                        </div>
                    </div>
                    </Marquee>
                </div>


        </div>
    );
};

export default AppFooter;
