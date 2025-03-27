import { createContext, use, useState } from "react";

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export function useTheme() {
    return use(ThemeContext);
}

export function useThemeUpdate() {
    return use(ThemeUpdateContext);
}

export function ThemeProvider({ children }) {
    const [dark, setDark] = useState(false);
    const handleChangeDark = () => setDark(s => !s);

    return (
        <ThemeContext value={dark}>
            <ThemeUpdateContext value={handleChangeDark}>
                { children }
            </ThemeUpdateContext>
        </ThemeContext>
    );
}