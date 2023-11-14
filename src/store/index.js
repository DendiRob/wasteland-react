import { combineReducers, configureStore } from '@reduxjs/toolkit'; 
import mainSlice from './mainSlice';

const rootReducer = combineReducers({
    mainStates: mainSlice,
})

const store = () =>{
  return configureStore({
     reducer: rootReducer,
     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat()
   })
 }
export { store }