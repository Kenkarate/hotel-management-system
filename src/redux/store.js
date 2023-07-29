import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserSlice from "./UserSlice";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import sessionStorage from 'redux-persist/es/storage/session';

const persistConfig = {
  key: "root",
  storage: sessionStorage,
};

// Combine all your reducers here
const rootReducer = combineReducers({
  user: UserSlice,
  // Add other reducers if you have more
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  //   middleware: [thunk],
});

export const persistor = persistStore(store);
