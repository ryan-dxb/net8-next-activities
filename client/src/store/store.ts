import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { activitiesApi } from "./features/activities/api";

const rootReducer = combineReducers({
  // add reducers here
  [activitiesApi.reducerPath]: activitiesApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,

  devTools: process.env.NODE_ENV !== "production",

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(activitiesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
