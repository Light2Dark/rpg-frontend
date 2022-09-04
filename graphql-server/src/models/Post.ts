import { builder } from "../builder";

builder.prismaObject("Post", {
    fields: obj => ({
        id: obj.exposeID("id"),
        body: obj.exposeString("body"),
        createdAt: obj.expose("createdAt", {
            type: "Date"
        }),
        author: obj.relation("author")
    })
})