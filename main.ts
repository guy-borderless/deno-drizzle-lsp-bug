import { pgTable, bigint, } from "drizzle-orm/pg-core"


export const ePortal = pgTable("e_portal", {
  // You can use { mode: "bigint" } if numbers are exceeding js number limitations
  id: bigint("id", { mode: "number" }).primaryKey().notNull(),
})
ePortal
