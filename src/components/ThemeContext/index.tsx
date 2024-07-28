import React, { createContext, ReactNode, useState } from 'react';

export interface Theme {
	isDark: boolean;
	toggleTheme: () => void;
}

const ThemeContext = createContext<Theme>({
	isDark: false,
	toggleTheme: () => {},
});

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [isDark, setIsDark] = useState(false);

	const toggleTheme = () => {
		setIsDark((prevIsDark) => !prevIsDark);
	};

	const theme: Theme = {
		isDark,
		toggleTheme,
	};

	return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export default ThemeContext;
