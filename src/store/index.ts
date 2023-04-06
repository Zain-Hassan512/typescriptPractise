import {configureStore} from '@reduxjs/toolkit';
import taskReducer from './slice';

const store = configureStore({
  reducer: {
    shopingList: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
