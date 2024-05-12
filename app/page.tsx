import Image from "next/image";
import { SignIn } from "./ui/sign-in";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h3>Hello</h3>
            <SignIn />
        </main>
    );
}
