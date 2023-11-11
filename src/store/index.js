import { combineReducers, configureStore } from '@reduxjs/toolkit'; 
import menuSlice from './menuSlice';

const rootReducer = combineReducers({
    menuStates: menuSlice,
})

const store = () =>{
  return configureStore({
     reducer: rootReducer,
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
   })
 }
export { store }