import { GetUsersQuery } from "./graphql/generated"

export type Post = GetUsersQuery["users"][0]["posts"][0]
export type User = GetUsersQuery["users"][0]

// export type Post = {
//     body: string
//     author: User
// }

// export type User = {
//     name: string
// }