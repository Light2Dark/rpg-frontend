import { Post } from "../types"

type ConfessionProps = {
    content: Post[]
}

const Confessions = ({content}: ConfessionProps) => {
    return (
        <div className="flex flex-col gap-1">
            {
                content.map((confession, index)=> (
                    <div key={index}>
                        <p>{confession.body}</p>
                        <p className="text-xs text-gray-600">{confession.author.name}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default Confessions