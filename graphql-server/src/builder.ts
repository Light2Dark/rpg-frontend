// Pothos schema builder
import SchemaBuilder from "@pothos/core";
import {DateResolver} from "graphql-scalars"
import PrismaPlugin from "@pothos/plugin-prisma"
import type PrismaTypes from "@pothos/plugin-prisma/generated"
import {prisma} from "./db"

// adding a custom scalar type
export const builder = new SchemaBuilder<{
    Scalars: {
        Date: {Input: Date, Output: Date}
    }
    PrismaTypes: PrismaTypes
}>({
    plugins: [PrismaPlugin],
    prisma: {
        client: prisma
    }
})

builder.addScalarType("Date", DateResolver, {})

// adding query type to API
builder.queryType({})