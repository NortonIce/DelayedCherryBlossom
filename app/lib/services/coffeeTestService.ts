import { getSql } from "../db";

export const getCoffeeList = async (): Promise<string[]> => {
    try {
        const sql = await getSql();
        const result = await sql`SELECT * FROM coffee`;
        console.log("result", result);
        return result;
    } catch (e) {
        console.log("error", e);
    }
    return [];
};
