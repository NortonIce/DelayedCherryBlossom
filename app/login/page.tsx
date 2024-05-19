import LoginForm from "../ui/login-form";
import { SignIn } from "../ui/sign-in";

export default function LoginPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <SignIn />
            <button>Login</button>

            <LoginForm />
        </main>
    );
}
