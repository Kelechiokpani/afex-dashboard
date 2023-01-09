import getConfig from 'next/config';
import React, { useContext } from 'react';
import { LayoutContext } from './context/layoutcontext';
import logo from "../public/demo/images/notfound/logo.png"
import Image from 'next/image'


const AppFooter = () => {
    const { layoutConfig } = useContext(LayoutContext);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    return (
        <div className="layout-footer">
            <Image src={logo} width={60} height={18} />
            {/* <img src={`${contextPath}/public/demo/images/notfound/logo.png-${layoutConfig.colorScheme === 'light' ? 'dark' : 'white'}.svg`} alt="Logo" height="20" className="mr-2" />
            by */}
            {/*<span className="font-medium ml-2">AFEX Front-End Assessment</span>*/}
        </div>
    );
};

export default AppFooter;
