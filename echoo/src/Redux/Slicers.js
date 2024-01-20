import { createSlice, nanoid } from '@reduxjs/toolkit'
import { LightTheme } from '../Utils/Constants';

const initialState= {
    activeSideNav: "",
    activeTopNav: "",
    themeStyle: LightTheme,
    sideMenuList: []
}

export const mainSlice = createSlice({
    name: 'mainSlice',
    initialState,
    reducers: {
        setAppTheme: (state, action) => {
            state.themeStyle= action.payload.themeStyle;
        },
        setActiveSideNav: (state, action) => {
            state.activeSideNav= action.payload.activeSideNav;
        },
        setActiveTopNav: (state, action) => {
            state.activeTopNav= action.payload.activeTopNav;
        },
        getSideMenuList: (state, action) => {
            state.sideMenuList= [{
                id: nanoid,
                name: "Item1"
            }]
        }
    }
})

export const {setAppTheme, setActiveSideNav, setActiveTopNav, getSideMenuList} = mainSlice.actions
export default mainSlice.reducer;
