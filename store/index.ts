import productsReducer from '../slices/ProductsSlice';
import themeReducer from '../slices/ThemeSlice';
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
	reducer: {
		products: productsReducer,
		theme: themeReducer
	}
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;