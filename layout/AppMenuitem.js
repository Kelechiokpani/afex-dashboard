import { useRouter } from 'next/router';
import Link from 'next/link';
import { Ripple } from 'primereact/ripple';
import { classNames } from 'primereact/utils';
import React, { useEffect, useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import { MenuContext } from './context/menucontext';

const AppMenuitem = (props) => {
    const { activeMenu, setActiveMenu } = useContext(MenuContext);
    const router = useRouter();
    const item = props.item;
    const key = props.parentKey ? props.parentKey + '-' + props.index : String(props.index);
    const isActiveRoute = item.to && router.pathname === item.to;
    const active = activeMenu === key || activeMenu.startsWith(key + '-');

    useEffect(() => {
        if (item.to && router.pathname === item.to) {
            setActiveMenu(key);
        }
        const onRouteChange = (url) => {
            if (item.to && item.to === url) {
                setActiveMenu(key);
            }
        };

        router.events.on('routeChangeComplete', onRouteChange);

        return () => {
            router.events.off('routeChangeComplete', onRouteChange);
        };
    }, []);

    const itemClick = (event) => {
        //avoid processing disabled items
        if (item.disabled) {
            event.preventDefault();
            return;
        }

        //execute command
        if (item.command) {
            item.command({ originalEvent: event, item: item });
        }

        // toggle active state
        if (item.items)
            setActiveMenu(active ? props.parentKey : key);
        else
            setActiveMenu(key);
    };

    const subMenu = item.items && item.visible !== false && (
        <CSSTransition timeout={{ enter: 1000, exit: 450 }} classNames="layout-submenu" in={props.root ? true : active} key={item.label}>
            <ul key={item.id}>
                {item.items.map((child, id, index) => {
                    return <AppMenuitem item={child} index={id} className={child.badgeClass} parentKey={key} key={index} />;
                })}
            </ul>
        </CSSTransition>
    );

    return (
        <li key={item.id} className={classNames({ 'layout-root-menuitem': props.root, 'active-menuitem': active })}>
            {item.to && !item.items && item.visible !== false ? (
                <Link key={item.id} href={item.to} replace={item.replaceUrl} target={item.target}>
                    <a onClick={(e) => itemClick(e)} className={classNames(item.class, 'p-ripple', { 'active-route': isActiveRoute })} target={item.target} tabIndex="0">
                        <i className={classNames('layout-menuitem-icon', item.icon)}> </i>
                        <br />
                        <span className="layout-menuitem-text">{item.label}</span>
                        {item.items && <i className="pi pi-fw pi-angle-down layout-submenu-toggler"></i>}
                        <Ripple />
                    </a>
                </Link>
            ) : null}

            {subMenu}
        </li>
    );
};

export default AppMenuitem;
