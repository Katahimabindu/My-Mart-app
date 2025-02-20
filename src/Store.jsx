import { configureStore } from "@reduxjs/toolkit"
import cartReducer from './Cartslice'
export const Store = configureStore({
  reducer:{cartReducer,},
});

export default Store;
