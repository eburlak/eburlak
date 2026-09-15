import { configureStore } from '@reduxjs/toolkit';
import projects from './slices/projects';
import ui from './slices/ui';

const store = configureStore({
  reducer: {
    projects,
    ui,
  },
});

export default store;

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
