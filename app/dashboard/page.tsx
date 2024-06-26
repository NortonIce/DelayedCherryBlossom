import { auth, signOut } from "@/auth";
import Image from "next/image";

export default async function Dashboard() {
    const session = await auth();

    if (!session) {
        return <div>No session</div>;
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h3>Dashboard</h3>
            <p>{session.user?.email}</p>

            <form
                action={async () => {
                    "use server";
                    await signOut();
                }}
            >
                <button type="submit">Sign Out</button>
            </form>
        </main>
    );
}
