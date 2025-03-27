import { useTheme, useThemeUpdate } from "../context/ThemeProvider";

function getTheme(theme) {
    return {
        background: theme ? '#000000' : '#ffffff',
        color: theme ? '#ffffff' : '#000000'
    }
}

export function FunctionComponent() {
    const dark = useTheme();
    const changeTheme = useThemeUpdate();

    return (
        <div style={getTheme(dark)}>
            <h1>FunctionComponent</h1>
            <button onClick={changeTheme}>Change Theme</button>
        </div>
    );
}