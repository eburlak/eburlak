import { configureStore } from '@reduxjs/toolkit';
import packages from './slices/packages';
import ui from './slices/ui';

const store = configureStore({
  reducer: {
    packages,
    ui,
  },
});

export default store;

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
