import { persistStore, persistReducer } from "redux-persist";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { contactsReduser } from "./contactsSlice";
import { filtersReduser } from "./filtersSlice";

import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["contacts"],
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    contacts: contactsReduser,
    filters: filtersReduser,
  })
);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
export const persistor = persistStore(store);
