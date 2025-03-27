import { FunctionWrapComponent } from "../components/FunctionWrapComponent";
import { ThemeProvider } from "../context/ThemeProvider";

export function Context() {
    return (
        <ThemeProvider>
            <FunctionWrapComponent />
        </ThemeProvider>
    );
}
