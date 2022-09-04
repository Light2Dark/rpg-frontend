// Pothos schema builder
import SchemaBuilder from "@pothos/core";
import {DateResolver} from "graphql-scalars"

// adding a custom scalar type
export const builder = new SchemaBuilder<{
    Scalars: {
        Date: {Input: Date, Output: Date}
    }
}>({})

builder.addScalarType("Date", DateResolver, {})