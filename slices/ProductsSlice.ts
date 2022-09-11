import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../@types";
import { RootState } from "../store";

interface IProductsContextProps {
	value: IProduct[];
	loading: boolean;
	selected: IProduct | null;
}

const initialState: IProductsContextProps = {
	value: [],
	loading: false,
	selected: null
};

const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		products: (state, action: PayloadAction<IProduct[]>) => {
			state.value = action.payload;
		},
		selected: (state, action: PayloadAction<IProduct>) => {
			state.selected = action.payload;
		},
		loading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},
	}
});

export const { products, selected, loading } = productsSlice.actions;

//* Selectors
export const productsValue = (state: RootState) => state.products.value;
export const selectedProductValue = (state: RootState) => state.products.selected;

export default productsSlice.reducer;