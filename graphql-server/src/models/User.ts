import { builder } from "../builder";
import {prisma} from "../db"

builder.prismaObject("User", {
    fields: t => ({
        id: t.exposeID("id"),
        name: t.exposeString("name"),
        posts: t.relation("posts")
    })
})

builder.queryField("users", t => 
    t.prismaField({ 
        type: ["User"], 
        resolve: (query, root, args, ctx, info) => {
            return prisma.user.findMany({...query})
        }
    }) 
)

// adds a field to the query type named users
// define field that resolves to some type in prisma schema
// let Pothos know this field will resolve to an array of Prisma Client's User type
// set up a resolver function for this field
// the query arg in resolver func is a special Pothos arg that Pothos will populate to load relations and data in performant way
