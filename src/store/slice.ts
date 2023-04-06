import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ShopingList} from '../types/shopingListType';
// interface ShopingList {
//   item: string;
//   quantity: string;
// }

interface ShopingListState {
  tasks: ShopingList[];
}

const initialState: ShopingListState = {
  tasks: [],
};

const shopingListSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addShopingList: (state, action: PayloadAction<ShopingList>) => {
      state.tasks.push(action.payload);
    },
  },
});

export const {addShopingList} = shopingListSlice.actions;

export default shopingListSlice.reducer;
