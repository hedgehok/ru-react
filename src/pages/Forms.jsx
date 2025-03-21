import { Signin } from "../components/Signin";
import { Signup } from "../components/Signup";

export function Forms() {
    const handleSigninSubmit = (values) => {
        console.log("Вход в систему:", values);
    };

    const handleSignup = (values) => {
        console.log("Отправленные данные:", values);
    };

    return (
        <>
            <h1>Формы</h1>

            <h2 style={{textAlign: "center"}}>Вход в систему</h2>
            <Signin onSubmit={handleSigninSubmit} />

            <h2 style={{textAlign: "center"}}>Регистрация</h2>
            <Signup onSubmit={handleSignup} />
        </>
    );
}
