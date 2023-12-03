import { configureStore } from "@reduxjs/toolkit";
import coinReducer from "./coins/coinSlice"

const store=configureStore({
reducer:{
coins:coinReducer,

},
});
export default store;