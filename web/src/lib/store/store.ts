// src/lib/store.ts
import { configureStore } from '@reduxjs/toolkit';
// Import your reducers here (we'll create authSlice next)
import userSlice from './reducers/userSlice'; 

export const makeStore = () => {
  return configureStore({
    reducer: {
      currentUser: userSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];