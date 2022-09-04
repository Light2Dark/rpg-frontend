import {createServer} from "@graphql-yoga/node"

const server = createServer({
    port: Number(process.env.API_PORT) || 4000 // default port
})

server.start().then(() => {
    console.log("Server started!")
})