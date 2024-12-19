import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../reducers/cartReducer"

const store = configureStore(cartReducer)

export default store;