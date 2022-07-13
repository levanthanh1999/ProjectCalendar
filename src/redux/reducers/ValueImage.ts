
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IValueImage {
  src: any;
}



export const valueImage = createSlice({
  name: 'valueImage',
  initialState: {
    imageSource: [],
  },
  reducers: {
    saveValueImage: (state:any, action) => {
      console.log('image', action.payload)
      state.imageSource = [...state.imageSource, action.payload]
      console.log(state.imageSource)
    } 
  },
})

export const { saveValueImage } = valueImage.actions;
export default valueImage.reducer;