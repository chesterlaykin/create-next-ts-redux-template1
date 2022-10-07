// DUCKS pattern
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SomeFeatureState {
  value: number;
}

const initialState: SomeFeatureState = {
  value: 0,
};

const somefeatureSlice = createSlice({
  name: 'somefeature',
  initialState,
  reducers: {
    incremented(state) {

      state.value++;
    },
    amountAdded(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
  },
});

export const { incremented, amountAdded } = somefeatureSlice.actions;
export default somefeatureSlice.reducer;
