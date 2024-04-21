import { getCoffeeList } from "@/app/lib/services/coffeeTestService";
var env = process.env.NODE_ENV || "development";

export async function GET() {
    const coffeeList = await getCoffeeList();
    return Response.json({
        env: env,
        result: coffeeList,
    });
}
