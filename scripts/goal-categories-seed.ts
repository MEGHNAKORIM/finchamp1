
import "dotenv/config";
import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";

import * as schema from "../db/schema";

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
    try {
        console.log("Seeding goal categories...");

        await db.delete(schema.goalCategories);

        await db.insert(schema.goalCategories).values([
            {
                name: "Emergency Fund",
                description: "Build a safety net for unexpected expenses",
                icon: "🚨",
            },
            {
                name: "Retirement",
                description: "Save for your future retirement",
                icon: "🏖️",
            },
            {
                name: "Home Purchase",
                description: "Save for a down payment on a house",
                icon: "🏠",
            },
            {
                name: "Education",
                description: "Fund your education or your children's education",
                icon: "🎓",
            },
            {
                name: "Vacation",
                description: "Save for that dream vacation",
                icon: "✈️",
            },
            {
                name: "Debt Payoff",
                description: "Pay off credit cards, loans, or other debts",
                icon: "💳",
            },
            {
                name: "Investment",
                description: "Build wealth through investments",
                icon: "📈",
            },
            {
                name: "Car Purchase",
                description: "Save for a new or used vehicle",
                icon: "🚗",
            },
        ]);

        console.log("Goal categories seeded successfully");
    } catch (error) {
        console.error(error);
        throw new Error("Failed to seed goal categories");
    }
};

main();
