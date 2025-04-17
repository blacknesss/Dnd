import { configureStore } from '@reduxjs/toolkit';
import boardSlice from './boardSlice';


export const makeStore = () => {
  return configureStore({
    reducer: boardSlice,
  })
} 
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']