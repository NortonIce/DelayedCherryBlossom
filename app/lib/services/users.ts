import { User } from "@/app/auth";
import { getSql, parseResponse } from "../db";

async function getUser(email: string): Promise<User | undefined> {
    try {
        const sql = await getSql();
        const result = parseResponse(
            await sql<User>`SELECT * FROM users WHERE email=${email}`
        );
        // return user.rows[0];
        const user: User = {
            id: "1",
            password: "password",
            email: "",
        };
        return;
    } catch (error) {
        console.error("Failed to fetch user:", error);
        throw new Error("Failed to fetch user.");
    }
}
