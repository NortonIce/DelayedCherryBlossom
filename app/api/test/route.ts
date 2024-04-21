import { getCoffeeList } from "@/app/lib/services/coffeeTestService";

export async function GET() {
    const coffeeList = await getCoffeeList();
    return Response.json(coffeeList);
}
