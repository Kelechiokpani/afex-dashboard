import React from "react";

const DashboardOverview =()=>{
    return(
        <div>
            <div className="flex flex-column flex-auto mb-4">
                <div className="surface-section p-5">
                    <div className="flex align-items-start flex-column lg:flex-row lg:justify-content-between">
                        <div className="flex align-items-start flex-column md:flex-row">
                            <div>

                                <div className="flex align-items-center flex-wrap text-sm">
                                    <div className="mr-3 mt-3">
                                        <span className="overView_text">BOARD</span>
                                        <div className=" mt-5 overView_text">PRODUCT</div>
                                    </div>
                                    <div className="mr-3 mt-3">
                                        <span className="overView_text red">X-Traded</span>
                                        <div className="overView_text mt-5 red">ALL</div>
                                    </div>
                                    <div className=" mr-3 mt-3">
                                        <span className="overView_text">OTC</span>
                                        <div className="overView_text mt-5">SMAZ</div>
                                    </div>
                                    <div className="mr-3 mt-3">
                                        <span className="overView_text">FI</span>
                                        <div className="overView_text mt-5">SBBS</div>
                                    </div>
                                    <div className=" mr-3 mt-3">
                                        <span className="overView_text">Derivatives</span>
                                        <div className="overView_text mt-5">SPRL</div>
                                    </div>
                                    <div className=" mr-3 mt-5">
                                        <div className="overView_text mt-5">SGNG</div>
                                    </div>
                                    <div className=" mr-3 mt-5">
                                        <div className="overView_text mt-5">SSGM</div>
                                    </div>
                                    <div className=" mr-3 mt-5">
                                        <div className="overView_text mt-5">FETC</div>
                                    </div>
                                    <div className=" mr-3 mt-5">
                                        <div className="overView_text mt-5">SCOC</div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardOverview