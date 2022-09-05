import { PaletteMode } from "@mui/material";

export const getDesignTokens = (mode: PaletteMode) => ({
	palette: {
		mode,
		...(mode === "light"
			? {
				// palette values for light mode
			}
			: {
				// palette values for dark mode
			})
	},
	components: {
		...(mode === "light"
			? {
				// components values for light mode
			}
			: {
				// components values for dark mode
			})
	}
});