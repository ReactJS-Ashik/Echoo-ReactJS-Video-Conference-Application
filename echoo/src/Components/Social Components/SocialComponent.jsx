import React, { useEffect } from 'react'

// Redux Imports
import { useDispatch } from 'react-redux'
import { setActivePage, setBreadCrumb } from '../../Redux/Slicers';

// My Constants
import { SocialPageTitle } from '../../Utils/Constants';
import { Outlet } from 'react-router-dom';

export default function SocialComponent() {

    const dispatch= useDispatch();

    useEffect(() => {
        dispatch(setActivePage({activePage: SocialPageTitle}))
        dispatch(setBreadCrumb({breadcrumb: [SocialPageTitle]}));
    }, [])

    return (
    <div>
        <Outlet />
    </div>
    )
}
