
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


export const valueImage = createSlice({
  name: 'valueImage',
  initialState: {
    imageSource: [],
    dateSource: 'YYYY/MM/DD',
    desSource: [],
  },
  reducers: {
    saveValueImage: (state:any, action) => {
      state.imageSource = action.payload
      // console.log(state.imageSource)
      // console.log('image', action.payload)
    },
    saveDate: (state:any, action) => {
      state.dateSource = action.payload
    },
    saveDes: (state:any, action) => {
      state.desSource = action.payload
    }
  },
})

export const { saveValueImage, saveDate, saveDes } = valueImage.actions;
export default valueImage.reducer;