import { getSql, parseResponse } from "../db";

export const getCoffeeList = async (): Promise<string[]> => {
    try {
        const sql = await getSql();
        const result = parseResponse(await sql`SELECT * FROM coffee`);
        console.log("result", result);
        return result;
    } catch (e) {
        console.log("error", e);
        return ["error", JSON.stringify(e)];
    }
};
