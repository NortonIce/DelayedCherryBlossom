import { sql } from "@vercel/postgres";
import postgres from "postgres";
var env = process.env.NODE_ENV || "development";

export const getSql = async (): Promise<any> => {
    console.log(env);
    if (env === "development") {
        return postgres({
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "post",
            database: "starbuckses",
        });
    } else {
        return sql;
    }
};

// export function getDatabase(): dtb {
//     console.log(env);
//     if (env === "development") {
//     } else {
//     }
//     return {
//         async getData(key) {
//             const client = createClient();
//             // Disable all authentication and encryption.
//             client.neonConfig.useSecureWebSocket = false;
//             client.neonConfig.pipelineTLS = false;
//             client.neonConfig.pipelineConnect = false;
//             await client.connect();
//             try {
//                 const result = await client.sql`SELECT * FROM coffee`;
//                 console.log(result);
//                 return result;
//             } catch (error) {
//                 console.error(error);
//             } finally {
//                 client.end();
//             }
//         },
//     };
// }
