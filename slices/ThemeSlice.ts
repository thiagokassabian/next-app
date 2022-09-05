import { PaletteMode } from "@mui/material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface IThemeContextProps {
	value: PaletteMode;
}

const initialState: IThemeContextProps = {
	value: "light"
};

const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		themeMode: (state, action: PayloadAction<PaletteMode>) => {
			state.value = action.payload;
		}
	}
});

export const { themeMode } = themeSlice.actions;

//* Selector
export const themeModeValue = (state: RootState) => state.theme.value;

export default themeSlice.reducer;