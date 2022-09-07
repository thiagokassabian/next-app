import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../@types";
import { RootState } from "../store";

interface IProductsContextProps {
	value: IProduct[];
	loading: boolean;
}

const initialState: IProductsContextProps = {
	value: [],
	loading: false,
};

const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		products: (state, action: PayloadAction<IProduct[]>) => {
			state.value = action.payload;
		},
		loading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},
	}
});

export const { products, loading } = productsSlice.actions;

//* Selector
export const productsValue = (state: RootState) => state.products.value;

export default productsSlice.reducer;