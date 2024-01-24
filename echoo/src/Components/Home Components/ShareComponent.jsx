import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

// Redux Imports
import { useDispatch } from 'react-redux';
import { changeLastBreadCrumb, setActiveSideNav } from '../../Redux/Slicers';

// Routing Imports
import { useParams } from 'react-router-dom';
// My Utils
import { getSideNavMenuByIndex } from '../../Utils/SideNavMenuProvider';
// My Constants
import { HomePageTitle } from '../../Utils/Constants';


export default function ShareComponent() {
    // State Variable
    const [ComponentInfo, setComponentInfo]= useState();
    // Redux related
    const dispatch= useDispatch();
    // Routing related
    const {componentId} = useParams();

    // useEffects
    useEffect(() => {
        setComponentInfo(getSideNavMenuByIndex(HomePageTitle, componentId));
    }, [componentId])

    useEffect(() => {
        if (ComponentInfo) {
            dispatch(changeLastBreadCrumb({breadcrumb: ComponentInfo.title}));
            dispatch(setActiveSideNav({activeSideNav: {title: ComponentInfo.title, secondary: ComponentInfo.secondary}}));
        }
    }, [ComponentInfo])

    return (
    <div>
        <h1>{ComponentInfo && ComponentInfo.title}</h1>
        <h4>{ComponentInfo && ComponentInfo.secondary}</h4>
    </div>
    )
}
