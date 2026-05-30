import { configureStore } from '@reduxjs/toolkit';
import userSlice from './reducers/userSlice'; 
import dialogSlice from './reducers/dialogSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      currentUser: userSlice,
      dialog: dialogSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];