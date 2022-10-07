import { configureStore } from '@reduxjs/toolkit';

//Import all slices
import somefeatureReducer from './features/somefeature/somefeature-slice';

//Import all api slices
import { apiSlice } from './features/someotherfeature/someotherfeature-api-slice';

// function getStore(PRELOADED_STATE) {
//   const store = createStore(counterReducer, PRELOADED_STATE)
//   return store
// }
export const store = configureStore({
  reducer: {
    //add slices and api slices
    somefeature: somefeatureReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
