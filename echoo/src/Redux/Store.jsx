import { configureStore } from '@reduxjs/toolkit'
import reducers from './Slicers'

export const store= configureStore({
    reducer: reducers
});