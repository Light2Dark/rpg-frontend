import {PrismaClient} from "@prisma/client"

const prisma = new PrismaClient()

async function seed() {
    // delete all users and posts
    await prisma.user.deleteMany({})
    await prisma.post.deleteMany({})

    // create dummy data
    await prisma.user.create({
        data: {
            name: "Alfonso",
            posts: {
                create: [{
                    body: "I invented the internet"
                },
                {
                    body: "I discovered Tortuga"
                }]
            }
        }
    })

    await prisma.user.create({
        data: {
            name: "Ada Lovelace",
            posts: {
                create: [{
                    body: "I invented the first computer program"
                }, {
                    body: "I pioneered computer science"
                }]
            }
        }
    })

    await prisma.user.create({
        data: {
            name: "Alan Turing",
            posts: {
                create: [{
                    body: "I invented the Turing machine"
                }, {
                    body: "I invented the Turing test"
                }]
            }
        }
    })
}

seed().then(() => {
    console.log("seeded the database")
})