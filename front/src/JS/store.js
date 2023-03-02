import { configureStore } from "@reduxjs/toolkit";
import candySlice from "./candySlice";
import commSlice from "./commSlice";
import decoslice from "./decoSlice";
import locationslice from "./locationSlice";
import productslice from "./productslice";
import servicesslice from "./servicesslice";

import userSlice from "./userSlice/userSlice";
export const store = configureStore({
  reducer: {
    user: userSlice,
    product: productslice,
    services: servicesslice,
    location: locationslice,
    deco: decoslice,
    candy: candySlice,
    comm: commSlice,
  },
});
