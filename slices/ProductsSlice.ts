import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../@types";

interface IProductsContextProps {
	products: IProduct[];
	loading: boolean;
}

const initialState: IProductsContextProps = {
	products: [],
	loading: false,
};

const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		products: (state, action: PayloadAction<IProduct[]>) => {
			state.products = action.payload;
		},
		loading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},
	}
});

export const { products, loading } = productsSlice.actions;

export default productsSlice.reducer;