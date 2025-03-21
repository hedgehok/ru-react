import { useOutletContext } from "react-router-dom";

export function Books() {
    const context = useOutletContext();

    return (
        <>
            <h1>Books</h1>
            <p>{context.name}</p>
        </>
    );
}