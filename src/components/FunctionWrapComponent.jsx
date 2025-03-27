import { useThemeUpdate } from "../context/ThemeProvider";
import { FunctionComponent } from "./FunctionComponent";


export function FunctionWrapComponent() {
    const changeTheme = useThemeUpdate();

    return (
        <>
            <button onClick={changeTheme}>Change Theme</button>
            <FunctionComponent />
            <FunctionComponent />
            <FunctionComponent />
        </>
    );
}