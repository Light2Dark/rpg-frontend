import {createServer} from "@graphql-yoga/node"
import { schema } from "./schema"

const server = createServer({
    port: Number(process.env.API_PORT) || 4000, // default port
    schema: schema
})

server.start().then(() => {
    console.log("Server started!")
})