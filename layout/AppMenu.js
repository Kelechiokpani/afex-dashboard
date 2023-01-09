
import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { MenuProvider } from './context/menucontext';

import { Menubar } from 'primereact/menubar';

const AppMenu = () => {

    const model = [
        {
        
            items: [{ label: 'Overview', icon: 'pi pi-fw pi-home', to: '/' }]
        },

        {
            
            items: [
                { label: 'Market', icon: 'pi pi-fw  pi-chart-line ', to: '/uikit/formlayout' },
                { label: 'Portfolio', icon: 'pi pi-fw pi pi-folder', to: '/uikit/input' },
                { label: 'Community', icon: 'pi pi-fw pi pi-users', to: '/uikit/floatlabel' },
                { label: 'Reports', icon: 'pi pi-fw pi pi-chart-bar', to: '/uikit/floatlabel' },
                { label: 'Settings', icon: 'pi pi-fw pi pi-cog', to: '/uikit/floatlabel' },
            ]
        },

    ];

    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => {
                    return !item.seperator ?
                        <AppMenuitem item={item} root={true} index={i} key={item.label} /> :
                        <li className="menu-separator"></li>;
                })}

            </ul>
        </MenuProvider>
    );
};

export default AppMenu;
