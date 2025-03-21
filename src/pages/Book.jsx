import { useParams } from "react-router-dom";

export function Book() {
    const params = useParams();

    return (
        <>
            <h1>Book</h1>
            <pre>{params.id}</pre>
        </>
    );
}