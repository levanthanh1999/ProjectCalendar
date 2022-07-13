import { combineReducers } from '@reduxjs/toolkit';
import { valueImage } from './reducers/ValueImage';



export const rootReducer = combineReducers({
    valueImage: valueImage.reducer
})
export type RootState = ReturnType<typeof rootReducer>