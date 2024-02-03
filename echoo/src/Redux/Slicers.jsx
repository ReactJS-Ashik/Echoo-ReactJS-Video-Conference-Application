// import { createSlice, nanoid } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { LightTheme } from '../Utils/Constants';

const initialState= {
    activeNav:{
        activeSideNav: {},
        activeSocialSideNav: null,
        activePage: "",
    },
    system: {
        themeStyle: LightTheme,
        breadcrumb: [],
    },
    profile: {
        username: "Ashik Rai",
    },
}

export const mainSlice = createSlice({
    name: 'mainSlice',
    initialState,
    reducers: {
        setAppTheme: (state, action) => {
            return {...state, system: {...state.system,themeStyle: action.payload.themeStyle}}
        },
        setActiveSideNav: (state, action) => {
            return {
                ...state,
                activeNav:{...state.activeNav, activeSideNav: action.payload.activeSideNav}
            }
        },
        setActiveSocialSideNav: (state, action) => {
            // console.trace(action.payload.activeSocialSideNav)
            return {...state, activeNav: {...state.activeNav, activeSocialSideNav: action.payload.activeSocialSideNav} }
        },
        setActivePage: (state, action) => {
            // console.log(action.payload.activePage)
            return {...state, activeNav: {...state.activeNav, activePage: action.payload.activePage }}
        },
        setBreadCrumb: (state, action) => {
            // console.trace(action.payload.breadcrumb)
            return {...state, system: {...state.system, breadcrumb: action.payload.breadcrumb }}
        },
        addBreadCrumb: (state, action) => {
            return {...state, system: {...state.system, breadcrumb: [...state.system.breadcrumb, action.payload.breadcrumb] }}
        },
        changeLastBreadCrumb: (state, action) => {
            if (state.system.breadcrumb.length === 1)
                return {...state, system: {...state.system, breadcrumb: [...state.system.breadcrumb, action.payload.breadcrumb] }}

            return {
                ...state,
                system: {
                    ...state.system,
                    breadcrumb: state.system.breadcrumb.map((breadcrumbData, index) =>
                        index === state.system.breadcrumb.length - 1 ? action.payload.breadcrumb : breadcrumbData
                    )
                }
            }
        }
    }
})

export const {setAppTheme, setActiveSideNav, setActiveSocialSideNav, setActivePage, setBreadCrumb, addBreadCrumb, changeLastBreadCrumb} = mainSlice.actions
export default mainSlice.reducer;
