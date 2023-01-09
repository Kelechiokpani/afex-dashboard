import getConfig from 'next/config';
import Link from 'next/link';
import logo from "../public/demo/images/notfound/Rectangle.png"
import Image from 'next/image'
import { classNames } from 'primereact/utils';
import React, { forwardRef, useContext, useImperativeHandle, useRef } from 'react';
import { LayoutContext } from './context/layoutcontext';

const AppTopbar = forwardRef((props, ref) => {
    const { layoutState, onMenuToggle, showProfileSidebar } = useContext(LayoutContext);
    const menubuttonRef = useRef(null);
    const topbarmenuRef = useRef(null);
    const topbarmenubuttonRef = useRef(null);
    // const contextPath = getConfig().publicRuntimeConfig.contextPath;

    useImperativeHandle(ref, () => ({
        menubutton: menubuttonRef.current,
        topbarmenu: topbarmenuRef.current,
        topbarmenubutton: topbarmenubuttonRef.current
    }));


    return (
        <div className="layout-topbar">

            <Link href="/">
                <a className="layout-topbar-logo">
                    <>
                        <Image src={logo} width={80} height={55} />
                        {/* <span>ComX</span> */}
                    </>
                </a>
            </Link>


            <button ref={topbarmenubuttonRef} type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={showProfileSidebar}>
                <i className="pi pi-ellipsis-v" />
            </button>

            <div ref={topbarmenuRef} className={classNames('layout-topbar-menu ', { 'layout-topbar-menu-mobile-active ': layoutState.profileSidebarVisible })}>

                <div type="button" className="p-link layout-topbar-button">

                    <span>CASH BALANCE</span>
                    <p>₦8,374,763</p>
                </div>
                <div type="button" className="p-link layout-topbar-button">
                    <span>SECURITIES VALUE</span>
                    <p>₦8,374,763</p>
                </div>
                <div type="button" className="p-link layout-topbar-button">
                    <span>LOAN BALANCE</span>
                    <p>₦7,542,246</p>
                </div>
                <button ref={menubuttonRef} type="button" className=" mt-4 mb-4  p-2 bg-white border-none cursor-pointer  layout-menu-button" onClick={onMenuToggle}>
                    <i className="pi pi-bars" />
                </button>
            </div>
        </div>
    );
});

export default AppTopbar;
